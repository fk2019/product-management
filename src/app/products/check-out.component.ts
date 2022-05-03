import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
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
  products:IProducts[]=[];
  errorMessage='';
  imageWidth=50;
  imageMargin=2;
  // products:IProducts[]=[];

  constructor(private productService:ProductsService, 
    private route:ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle+ this.products.length
    if(id ){
      this.getProduct(id)    
          
    }      
  }
getProduct(id:number){ 
 return this.productService.getProduct(id).subscribe({
    next:(product)=>{
      this.product=product
      if(this.product){
        this.products=this.cartService.addCart(this.product)
      }
      console.log(this.products)
    },
    
    error:(err)=>this.errorMessage=err
  })
 

  }

  onDelete():void{

  }
}
