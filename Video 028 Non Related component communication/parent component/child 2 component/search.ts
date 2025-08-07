import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText: string = ""

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  listOfCategories:string[]=["Books","Clothes","Electronics","Futniture","Game Equipments","Kitchen Products"];

  // 1. Creating the event

  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchText);
  }
}

