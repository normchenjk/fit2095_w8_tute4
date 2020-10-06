import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w8tute4';

  imageUrl = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

  items = [];

  itemName: string = "";
  itemQuantity: number = 0;
  itemPrice: number = 0;

  saveItem() {
    console.log("Form submitted!");
    console.log(this.itemName, this.itemQuantity, this.itemPrice);

    this.items.push({
      name: this.itemName,
      quantity: this.itemQuantity,
      price: this.itemPrice
    })
  }
}
