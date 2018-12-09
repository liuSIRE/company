const express=require('express');
const router=express.Router();
var pool=require('../pool.js');
router.post('/login',(req,res)=>{
var $uname=req.body.uname;
var $phone=req.body.phone;
var $email=req.body.email;
var $text=req.body.text;
var mysql='insert into users values(null,?,?,?,?)';
pool.query(mysql,[$uname,$phone,$email,$text],(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('提交成功');
	})
});
router.get('/news',(req,res)=>{
var sql='select * from new'
pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send(result);
	})

})
router.post("/signin",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    console.log(uname,upwd);
    pool.query("select * from yw_user where uname=? and upwd=?", [uname,upwd], (err,result)=>{
            if(err) console.log(err);
            if(result.length>0){
                res.writeHead(200,{
                    "Content-Type":"application/json;charset=utf-8",
                    "Access-Control-Allow-Origin":"*"
                })
                var user=result[0]
                req.session["uid"]=user["uid"]
                console.log(req.session["uid"]);
                res.write(JSON.stringify({
                    code:1,msg:"登陆成功！"
                }))
            }else{
                res.write(JSON.stringify({
                    code:0,
                    msg:"用户名或密码错误！"
                }))
            }
            res.end();
        }
    )
})
router.get("/islogin",(req,res)=>{
    res.writeHead(200);
    if(req.session.uid===undefined){
        res.write(JSON.stringify({code:0}))
        res.end()
    }
    else{
        var uid=req.session.uid;
        var sql='select * from yw_user where uid=?'
        pool.query(sql,[uid],(err,result)=>{
            if(err)throw err;
            var user=result[0]
            res.write(JSON.stringify({code:1,uname:user.uname}))
            res.end()
        })

    }
})
router.get("/signout",(req,res)=>{
    req.session["uid"]=undefined;
    res.end()
})
module.exports=router;