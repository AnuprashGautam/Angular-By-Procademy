import { Component } from '@angular/core';
import {Search} from './search/search';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-container',
  imports: [
    Search,
    ProductList
  ],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  searchText: string='';

  setSearchText(value: string){
    console.log(this.searchText);
    this.searchText=value;
  }
}
