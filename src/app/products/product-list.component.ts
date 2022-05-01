import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { IProducts } from './products';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle= 'Product List';
  imageWidth=50;
  imageMargin=2;
  private _listFilter:string="";
  errorMessage='';
  showImage=false;
  sub!:Subscription;
  products:IProducts[]=[]
  filteredProducts:IProducts[]=[];
  starMessage='';
  
get listFilter():string{

  return this._listFilter;
}

set listFilter(value:string){
  this._listFilter=value;
   
  this.filteredProducts=this.performFilter(value)
 
 
}

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.sub=this.productsService.getProducts().subscribe({
      next:(products)=>{
        this.products=products
        this.filteredProducts=this.products},
      error:(err)=>this.errorMessage=err
    })
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
 performFilter(filterBy:string):IProducts[]{
  filterBy=filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProducts)=>
  product.productName.toLocaleLowerCase().includes(filterBy))
 
 }
toggleImage():void{
  this.showImage=!this.showImage;
}
onRatingClicked(message:string){
  this.starMessage=message;
}

}
