import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { IProducts } from './products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products:IProducts[]=[];
  constructor(private http:HttpClient, private productService:ProductsService) { }
  addCart(product:IProducts){
   this.products.push(product)
   return this.products;
   
   
  }
}
