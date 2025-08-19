import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";
import { Test } from "./test/test";

@Component({
  selector: 'app-root',
  imports: [Child, Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Test');

  @ViewChild('para')
  paraEl:ElementRef;

  showParentDetails(){
    console.log(this.paraEl);
  }
}
