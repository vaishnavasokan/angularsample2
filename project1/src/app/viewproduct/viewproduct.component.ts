import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productdetails;
  b1:boolean=false;
  constructor(private ps:ProductService, private rt:Router) { }

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

      this.rt.navigateByUrl("/home/edit/"+id)
  }

}
