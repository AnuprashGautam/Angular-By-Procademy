# The data is being sent from the component class to the view template

## Component class

```typescript

 export class Details {
  d: Date=new Date();
  date:number=this.d.getDate();
  day:number=this.d.getDay();
  name:string="Anuprash Gautam";
  display=false;

  onClick(){
    this.display=true;
  }
}

```


## View Template

```html

<div>
    <h1>Hello this is the detail box that i will show you as you click the below button:-</h1>
    <button (click)="onClick()"></button>

    <div [hidden]='display'>
        <h2>I am gonna show some data to the box.</h2>
        <p>I am {{name}} and it is {{date}} date today and it is {{day}} day today.</p>
    </div>
</div>

```