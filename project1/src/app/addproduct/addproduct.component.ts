import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  adddetails;
  pid;
  pname;
  price;

  constructor(private ps:ProductService, private rt:Router) { }

  ngOnInit() {
  }

  public addproduct()
  {
    this.ps.adddata(this.pid,this.pname,this.price).subscribe(data=>{
      this.adddetails=data;
  })
    this.rt.navigateByUrl("/view")
  }

}
