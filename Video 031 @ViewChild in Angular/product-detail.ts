import {Component, Input} from '@angular/core';
import { CommonModule} from '@angular/common';
import {ProductList} from '../product-list/product-list';
import {Product} from '../../Models/Product';

@Component({
  selector: 'product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input()
  productListComp:ProductList= undefined;

  product: Product;

  ngOnInit(){
    this.product= this.productListComp.selectedProduct;
  }
}
