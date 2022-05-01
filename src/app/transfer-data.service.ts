import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
 
  constructor() { }
  private data='';



  setData(data:string){
    this.data=data;
  }
  getData(){
    let tempData=this.data;
    return tempData;

  }
  // clearData(){
  //   this.data=undefined;
  // }
}


