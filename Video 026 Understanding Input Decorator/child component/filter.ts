import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  @Input()
  all:number=0;

  @Input()
  inStock:number=0;

  @Input()
  outOfStock:number=0;
}
