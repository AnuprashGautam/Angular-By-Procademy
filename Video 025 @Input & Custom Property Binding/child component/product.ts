import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product {
  @Input() product: {
    id: number,
    image: string,
    price: number,
    title: string,
    category: string,
    instock: number
  };
}
