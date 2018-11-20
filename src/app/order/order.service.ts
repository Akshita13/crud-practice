import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order.model';

@Injectable()
export class OrderService {

  private url:string ;
  constructor(private http:HttpClient) { 
    this.url='api/orders'
  }

  getOrder():Observable<Order[]>
  { 
    return this.http.get<Order[]>(this.url);
  }

  addOrder(order):Observable<Order>
  {
    return this.http.post<Order>(this.url,order);
  }

}
