import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input , OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{
  title: string="Demo Component's Title";
  // @Input()  message: string[];
  @Input()  message: string;

  @ViewChild('para')
  tempPara: ElementRef;

  @ContentChild('temp')
  paraContent: ElementRef;

  constructor()
  {
    // console.log("This is the child component constructor:----");
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // console.log("ngOnChanges lifecycle hook called:----");
    // console.log(changes);
  }

  ngOnInit()
  {
    // console.log("ngOnInit lifecycle hook called.");
    // console.log(this.tempPara.nativeElement);
  }

  ngDoCheck()
  {
    console.log("ngDoCheck lifecycle hook called.");
    // console.log("Accessing in ngDoCheck:-",this.paraContent);
  }

  ngAfterContentInit()
  {
    console.log("ngAfterContentInit lifecycle hook called.");
    // console.log("Accessing in ngAfterContentInit:-",this.paraContent.nativeElement);
  }

  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked lifecycle hook called.");
    console.log("Accessing in ngAfterContentInit:-",this.paraContent.nativeElement);
  }
}

