import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private hc:HttpClient) { }

  public getdata()
  {
    let url="http://localhost:8000/product/view";
    return this.hc.get(url);
  }

  public adddata(a,b,c)
  {
    let url="http://localhost:8000/product/add";
    return this.hc.post(url,{pid:a,pname:b,price:c});
  }

  public viewdata(id)
  {
    let url="http://localhost:8000/product/view/"+id;
    return this.hc.get(url);
  }

  public updatedata(x,y,z)
  {
    let url="http://localhost:8000/product/update";
    return this.hc.post(url,{pid:x,pname:y,price:z});
  }

  
}
