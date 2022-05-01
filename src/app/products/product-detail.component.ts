import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { IProducts } from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle= 'Product Detail';
  product:IProducts|undefined;
  errorMessage='';
  constructor(private route:ActivatedRoute, private router:Router,private productService:ProductsService) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`:${id}`;
    if(id){
      this.getProduct(id)
      
    }
  }
  getProduct(id:number):void{
    this.productService.getProduct(id).subscribe({
      next:(product)=>this.product=product,
      error:(error)=>this.errorMessage=error
    } )
   
  }
  onBack():void{
    this.router.navigate(['/products'])
  }

}
