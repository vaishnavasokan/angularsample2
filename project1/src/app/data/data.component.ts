import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';
import { SampleService } from '../sample.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  val;
  view:boolean;
  view1:boolean;

  n1;
  n2;
  message:string;
  wm;
  constructor(private ds:CalcService, private ss:SampleService) { }

  ngOnInit() {
    
  }

  public add()
  {
      this.view=true;
      this.val=this.ds.add(parseInt(this.n1),parseInt(this.n2));
  }

  public diff()
  {
      this.view=true;
      this.val=this.ds.diff(parseInt(this.n1),parseInt(this.n2));
  }

  // public show()
  // {
  //     this.view1=true;
  //     this.wm = this.ds.display({name:this.message});
      
  // }

  public show()
  {
      this.ss.getdata().subscribe(data=>{
      this.wm=data;
      console.log(this.wm);
    }

    )
  }
  

}
