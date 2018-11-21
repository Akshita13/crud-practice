import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order.model';

@Injectable()
export class OrderService {

  private url:string ;
  constructor(private http:HttpClient) { 
    this.url='api/order';
  }

 public getOrder():Observable<Order[]>
  { 
    return this.http.get<Order[]>(this.url);
  }

  public addOrder(order):Observable<Order>
  {
    return this.http.post<Order>(this.url,order);
  }

  public deleteOrder(id:number):Observable<Order>
  {
    return this.http.delete<Order>(this.url+"/"+id);
  }

  public editOrder(id):Observable<Order[]>
  {
    return this.http.get<Order[]>(this.url+"/"+id);
  }

  public updateOrder(order):Observable<Order>
  {
    return this.http.put<Order>(this.url,order);
  }

}
