import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../../order.model';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  

  public deleteOrders(id):void{
    this.orderService.deleteOrder(id).subscribe();
    this.getOrders();
  }

  public getOrders(): void {
   
    this.orderService.getOrder().subscribe(order=>this.orders=order);
  }

}
