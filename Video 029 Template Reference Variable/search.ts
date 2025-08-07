import {Component, EventEmitter, input, Output} from '@angular/core';
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

  listOfCategories:string[]=["Books","Clothes","Electronics","Futniture","Game Equipments","Kitchen Products"];

  // 1. Creating the event

  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  updateSearchText(inputEl: HTMLInputElement) {
    console.log(inputEl.value);
    this.searchText=inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}

