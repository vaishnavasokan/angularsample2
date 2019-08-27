import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productdetails;
  b1:boolean=false;
  constructor(private ps:ProductService) { }

  ngOnInit() {
  }

  public showproduct()
  {
      this.ps.getdata().subscribe(data=>{
      this.productdetails=data;
  })
  }
  
  public editproduct(id)
  {
    //this.b1 =true;
  }

}
