import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../order.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public ordersForm:FormGroup;
  public orders;

  constructor(private orderService:OrderService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router) { 
    this.ordersForm=this.fb.group({});
  }

  ngOnInit() {
  
 
    this.editOrders();
    this.form();
  }
  public form():void{
    this.ordersForm=this.fb.group(
      {
        id:['',Validators.required],
        itemName: ['', Validators.required],
        price: ['', Validators.required],
        address: ['', Validators.required],
        mobileNumber: ['', Validators.required],
      }
    )
  }

 public editOrders():void
 {
 const id=+this.route.snapshot.paramMap.get("id");
 this.orderService.editOrder(id).subscribe(
   order=>{this.orders=order
  
    this.ordersForm.patchValue(
      {
        itemName:this.orders.itemName,
        price:this.orders.price,
        address:this.orders.address,
        mobileNumber:this.orders.mobileNumber
      })
  })
 }

 public updateOrders():void
 {
  this.orderService.updateOrder(this.ordersForm.value).subscribe();
  this.ordersForm.reset();
  this.router.navigate(['/view']);

 }

}
