import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';

import { IProducts } from '../products/products';


@Component({
  selector: 'pm-search',
  templateUrl: './search.component.html',
  styleUrls:['./search.component.css']

})
export class SearchComponent implements OnInit {
  pageTitle='Search component';
  imageWidth=50;
  imageMargin=2;
  errorMessage='';
  errorProductMessage='Sorry! Product Not Available';
  sub!:Subscription;
  products:IProducts[]=[];
  searchProducts:IProducts[]=[];
  private _Search='';
  showImage=false;
  errorProduct=false;
  searchItem=false;
  displaySearchText='You searched for: '

   toggleImage():void{
    this.showImage=!this.showImage;
  }

 toggleProduct():void{
  if(this.searchProducts.length===0){
    this.errorProduct=true;
    this.errorProductMessage;
    // console.log(this.errorProductMessage)
  } else{
    this.errorProduct=false
 
    
  };
 
 }
 toggleSearchMessage():void{
    if(this._Search===''){
      this.searchItem=false
    } else{
      this.searchItem=true;
      this.displaySearchText;
    }
}
get Search():string {
  
  return this._Search
}
 set Search(value:string) {
  this._Search=value;
  this.searchProducts=this.onClick(value)
  this.toggleProduct()
  this.toggleSearchMessage()

 }

  constructor(private productService:ProductsService) { } 

  ngOnInit(): void {
    this.sub=this.productService.getProducts().subscribe({
      next:(products)=>{
        this.products=products
        this.searchProducts=this.products        
      },
      error:(err)=>this.errorMessage=err
    })
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();   
  }
  onClick(searchData:string):IProducts[]{
    searchData=searchData.toLocaleLowerCase()
    return this.products.filter((product:IProducts)=>
     product.productName.toLocaleLowerCase().includes(searchData))
    
  }

}
