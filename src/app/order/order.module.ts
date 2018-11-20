import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { OrderService } from './order.service';
import { OrderRoutingModule } from './order-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import{FormsModule}from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AddComponent, ViewComponent, EditComponent],
  providers:[OrderService]
})
export class OrderModule { }