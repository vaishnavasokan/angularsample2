import { Component, OnInit } from '@angular/core';
//import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import { Inject, Injectable } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {ProductService} from "../product.service"

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  pid;
  val;
  user;
  pname;
  price;
  product;
  viewresult;

  id;
  name;
  prodprice;

  uresult;

  //constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  constructor(private rt:Router, private ar:ActivatedRoute, private ps:ProductService) {}

  ngOnInit() {
      //this.user=this.storage.get("Username");
      this.user=localStorage.getItem("UserName");
      this.pid=this.ar.snapshot.paramMap.get("id")
      this.ps.viewdata(this.pid).subscribe(data=>
        {
          this.viewresult=data;
          console.log(this.viewresult);
        })
  }

  Add()
  {
      //this.storage.set("Username",this.val);
      localStorage.setItem("UserName",this.val);

  }

  Addtotcart()
  {
     this.product={pname:this.pname,price:this.price};
  }

  update(id)
  {
    //console.log(this.name);
    this.id=id;
    this.ps.updatedata(this.id,this.name,this.prodprice).subscribe(data=>
      {
        //console.log(this.name);
        this.uresult=data;
      })
  }




}
