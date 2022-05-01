import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProducts } from './products/products';
import {tap, catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl='api/products/products.json'
  constructor(private http: HttpClient) { }
  // get all products
  getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.productsUrl).pipe(
      tap(data=>JSON.stringify(data)),
      catchError(this.handleError)
    )
  }
  // get one product
  getProduct(id:number):Observable<IProducts|undefined>{
    return this.getProducts().pipe(map((products:IProducts[])=>
    products.find(p=>p.productId===id)),
    catchError(this.handleError))
  }
  getProductByName(value:string):Observable<IProducts|undefined>{
    return this.getProducts().pipe(map((products:IProducts[])=>
    products.find(p=>p.productName===value)),
    catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse):Observable<never>{
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage=`.An error occured: ${err.error.message}`
    } else {
      errorMessage=`server returned code: ${err.status} error message is ${err.message}`
    }
    console.log(errorMessage);
    return throwError(()=>new Error(errorMessage))
  }
}
