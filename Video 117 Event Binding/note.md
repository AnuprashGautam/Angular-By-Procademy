# Event Binding: sending data from the view template to the component class.

```html
<div>
  <button (click)="incrementCartValue()" [disabled]="addToCart==product.inStock">+</button>
  <span>{{ addToCart }}</span>
  <button (click)="decrementCartValue()" [disabled]="addToCart==0">-</button>
</div>
```

```typescript
export class ProductCard {
  addToCart: number = 0;
  product = {
    name: "iPhone X",
    price: 799,
    color: "Black",
    discount: 8.5,
    inStock: 5,
    imagePath: "assets/products/iphone.png",
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
}
```
