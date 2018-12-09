const express=require('express');
const router=express.Router();
var pool=require('../pool.js');
router.get('/search',(req,res)=>{
    var kwords=req.query.kwords;
    var arr=kwords.split(' ');
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like '%${arr[i]}%'`;
    }
    var where =" where "+arr.join(' and ');
    console.log(where)
})
module.exports=router;