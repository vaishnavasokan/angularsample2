import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CalcService {

  constructor() { }


  public add(x:number,y:number)
  {
      return x+y;

  }

  public diff(x:number,y:number)
  {
    return x-y;
  }

  public display(x)
  {
    return "Welcome "+x.name;
  }
}