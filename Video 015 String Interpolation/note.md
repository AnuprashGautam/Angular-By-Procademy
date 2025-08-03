# String Interpolation

## Component class 

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product={
    name: "iPhone X",
    price: 799,
    color: "Black",
    discount: 8.5,
    inStock: 5
  }

  getDiscountedPrice(){
    return this.product.price - ( this.product.price * this.product.discount/100);
  }
}

```


## View Template

```html
<div class="card">
    <div class="card__image">
        <img src="assets/products/iphone.jpg" alt="product image">
    </div>

    <div class="card__details">
        <h2>{{product.name}}</h2>
        <hr>
        <p>{{"Color: "+product.color}}</p>
        <p>{{
            product.inStock > 0? 'Only ' + product.inStock + " left"  : "Not in Stock"
            }}</p>
        <p>{{"Discount: "+ product.discount + "%"}}</p>
        <p>{{"Actual Price: $"+ product.price}}</p>
        <p>{{"Discounted Price: $"+ getDiscountedPrice()}}</p>
    </div>
</div>
```