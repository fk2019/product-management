import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient, private productService:ProductsService) { }
  addCart(){
    
  }
}
