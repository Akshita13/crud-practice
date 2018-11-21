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
  public ordersForm: FormGroup;
  public submitted: boolean;

  constructor(private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router) {
    this.ordersForm = this.fb.group({});
  }

  ngOnInit() {

    this.ordersForm = this.fb.group(
      {
        itemName: ['', Validators.required],
        price: ['', Validators.required],
        address: ['', Validators.required],
        mobileNumber: ['', Validators.required],
      }
    )
  }


  public addOrders():void {
    this.orderService.addOrder(this.ordersForm.value).subscribe(() => {
      this.submitted=true;
      this.ordersForm.reset();
      this.router.navigate(['/view']);
    });

  }

  public hasFieldError(itemName:string,price:number,address:string,mobileNumber:number):boolean
  {
    if(itemName){
      return(
        this.ordersForm.controls[itemName].invalid &&
        (this.ordersForm.controls[itemName].touched || this.ordersForm.controls[itemName].dirty)
      );
    }
    else if(price)
    {
      return(
        this.ordersForm.controls[price].invalid &&
        (this.ordersForm.controls[price].touched || this.ordersForm.controls[price].dirty)
      )
    }
    else if(address)
    {
      return(
        this.ordersForm.controls[address].invalid &&
        (this.ordersForm.controls[address].touched || this.ordersForm.controls[address].dirty)
      )
    }
    else
    {
      return(
        this.ordersForm.controls[mobileNumber].invalid &&
        (this.ordersForm.controls[mobileNumber].touched || this.ordersForm.controls[mobileNumber].dirty)
      );
    }
    
  }



}
