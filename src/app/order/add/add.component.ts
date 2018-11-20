import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public ordersForm:FormGroup;

  constructor(private fb:FormBuilder,
              private orderService:OrderService,
              private router:Router) {
      this.ordersForm=this.fb.group({});
   }

  ngOnInit() {
   this.addOrders(this.ordersForm);
   this.ordersForm=this.fb.group(
    {
      itemName:['',Validators.required],
      price:['',Validators.required],
      address:['',Validators.required],
      mobileNumber:['',Validators.required],
    }
  )
  }


  public addOrders(ordersForm):void
  {
    this.orderService.addOrder(ordersForm).subscribe(()=>  {
    this.ordersForm.reset();
    //this.router.navigate(['/view']);
  });

}



}
