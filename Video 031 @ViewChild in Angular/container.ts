import {Component, ViewChild} from '@angular/core';
import {Search} from './search/search';
import {ProductList} from './product-list/product-list';
import {ProductDetail} from './product-detail/product-detail';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-container',
  imports: [
    CommonModule,
    Search,
    ProductList,
    ProductDetail
  ],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  searchText: string='';

  @ViewChild(ProductList)
  productListComponent: ProductList;

  setSearchText(value: string){
    this.searchText=value;
  }
}
