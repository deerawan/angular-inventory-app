import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product('NICEHAT', 'A Nice Black Hat',
      '/images/product/black-hat.jpg', ['men', 'accessories', 'hats'], 29.99),
      new Product('NEATTOJACKET', 'Hoody Jacket',
      '/images/product/blue-jacket.jpg', ['men', 'apparel', 'jackets'], 59.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log(product.name);
  }
}
