import { Component, OnInit } from '@angular/core';
//import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  val;
  user;
  pname;
  price;
  product;
  //constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  constructor() {}

  ngOnInit() {
      //this.user=this.storage.get("Username");
      this.user=localStorage.getItem("UserName");
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
}
