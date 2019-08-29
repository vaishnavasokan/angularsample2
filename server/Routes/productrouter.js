var express=require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var url="mongodb://localhost/sdb";

var product=require("../model/productmodel");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected..");
})
router.post('/add',function(req,res)
{
    var p1 = new product();
    p1.pid = req.body.pid;
    p1.pname = req.body.pname;
    p1.price = req.body.price;
    // p1.pid = "po2";
    // p1.pname = "xyz";
    // p1.price = 2000;
    p1.save((err)=>{
        if (err) throw err;
        else
        {
            console.log("Product Added.");
            res.redirect("/");
        }
    })
})

router.get("/edit:id",function(req,res)
{
    // var id=req.params.id;
    // console.log(id);
})


router.get("/view",function(req,res){
    product.find({},function(err,result){
        if (err) throw err;
        else{
            //console.log(result);
            res.send(result);
        }
    })
    
})

router.get("/view/:id",function(req,res){

    var id =req.params.id;
    product.find({pid:id},function(err,result){
        if (err) throw err;
        else{
            //console.log(result);
            res.send(result);
        }
    })
    
})

router.post("/update",function(req,res){

    var id=req.body.pid;
    console.log(id);
    var name=req.body.pname;
    var price=req.body.price;
    product.updateMany({pid:id},{$set:{pname:name,price:price}},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})

router.post("/delete",function(req,res){
    product.deleteMany({},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})
module.exports=router;