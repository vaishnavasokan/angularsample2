import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  company;
  location;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {

    this.company=this.ar.snapshot.paramMap.get("cname");
    this.location=this.ar.snapshot.paramMap.get("loc");
  }

}
