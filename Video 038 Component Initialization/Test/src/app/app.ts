import { Component, signal } from '@angular/core';
import { Demo } from './demo/demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Test');
  // inputVal:string[]=['Hi','How are you?'];
  inputVal:string='';

  constructor()
  {
    // console.log("This is the parent component constructor.");
  }

  onSubmitButtonClicked(inputEl: HTMLInputElement)
  {
    // this.inputVal.push(inputEl.value);
    this.inputVal=inputEl.value;
  }
}
