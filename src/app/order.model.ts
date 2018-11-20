/**
 * @author Akshita Kapadia
 * @property id is auto incremented .it is id of perticular order
 * @property itemName is for which item to purchase
 * @property price is for price of the item which we want to purchase
 * @property address is for, where this item has to be sent
 * @property mobileNumber is person's mobile num who is purchasing this item
 */

export class Order
{
    id:number;
    itemName:string;
    price:number;
    address:string;
    mobileNumber:number;
}