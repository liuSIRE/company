const express=require('express');
const router=express.Router();
var pool=require('../pool.js');

router.get('/new',(req,res)=>{
var sql='select * from news'
pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send(result);
	})

})
router.get('/course',(req,res)=>{
      //1:参数  当前页码  页大小(一页显示几行数据)
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;  //3
    //2:sql
    //2.1:查找总记录数->转换总页数  15->3
    var sql = "SELECT count(cid) as c FROM  course";
    var obj = {};      //保存发送客户端数据
    var progress = 0;  //进度
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
          res.send(obj);
        }
    });
    //2.2:查找当前页内容           中间5行
    var sql = " SELECT * from news LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        //console.log(result);
        obj.data = result;
        progress+=50;
        if(progress==100){
          res.send(obj);
        }
    })

})
router.get('/getNews',(req,res)=>{
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;
    var sql2 = " SELECT * from news LIMIT ?,?";
    pageSize = parseInt(pageSize)
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    var sql = "SELECT count(nid) as c FROM  news";
    var obj = {};      //保存发送客户端数据
    new Promise(function(open) {
        pool.query(sql, (err, result) => {
            if (err) throw err;
            var c = Math.ceil(result[0].c / pageSize);
            obj.pageCount = c;
            open()
        })
    }),
    new Promise(function(open) {
        pool.query(sql2, [offset, pageSize],(err, result) => {
            if (err) throw err;
            //console.log(result);
            obj.data = result;
            open()
        })
    }).then(function(){
        res.send(obj)
        console.log("响应完成!");
    })
})
router.get('/search',(req,res)=>{
    var kwords=req.query.kwords;
    //  var pno = req.query.pno;            //2
    // var pageSize = req.query.pageSize;
    var arr=kwords.split(' ');
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like '%${arr[i]}%'`;
    }
    var where =" where "+arr.join(' and ');
    console.log(where)


    //  var offset = parseInt((pno-1)*pageSize);
    var sql='select * from   yw_course '+where ;
    pool.query(sql, [kwords],(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    })

})
router.get('/courses',(req,res)=>{
    var obj = {};
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;
    var sql1 = 'SELECT count(cid) as c FROM yw_course'
    var sql2=" SELECT * from yw_course LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    new Promise(function(open) {
        pool.query(sql1, (err, result) => {
            if (err) throw err;
            var c = Math.ceil(result[0].c / pageSize);
            obj.pageCount = c;
            console.log(obj);
            open()
        })
    }),new Promise(function(open) {
            pool.query(sql2, [offset, pageSize],(err, result) => {
                if (err) throw err;
                //console.log(result);
                obj.data = result;
                open()
            })
        }).then(function(){
            res.send(obj)
            console.log("响应完成!");
        })

    })
router.get('/getCourseTpe',(req,res)=>{
    var sql='SELECT * FROM ylw_show as s INNER JOIN yw_course as c on(s.sid=c.family_id) where s.sid=? limit 0,4'
    var obj=[]
    Promise.all([
        new Promise(function(open){
            pool.query(sql,[1],(err,result)=>{
                if(err)throw err;
                obj.push(result);
                open();
            });
        }),
        new Promise(function(open){
            pool.query(sql,[2],(err,result)=>{
                if(err)throw err;
                obj.push(result);
                open();
            });
        })
    ]).then(function(){
        res.send(obj)
        console.log(obj)
    })

})
module.exports=router;