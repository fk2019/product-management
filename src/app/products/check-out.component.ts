import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProducts } from './products';

@Component({
  selector: 'pm-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  pageTitle='Shopping Cart Details'
  product:IProducts|undefined;
  errorMessage='';
  constructor(private productService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle+=`:${id}`
    if(id){
      this.getProduct(id)     
    }  
  }
getProduct(id:number):void{
 this.productService.getProduct(id).subscribe({
    next:(product)=>this.product=product,
    error:(err)=>this.errorMessage=err
  })

  }
}
