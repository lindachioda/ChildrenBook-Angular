import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

    constructor(public cartService:CartService){
    }

    //metodo per la somma del prezzo:
    //arrayitems viene elaborato con map e poi reduce  mi restituisce la somma partendo da 0
    public locationSum():any{
      return this.cartService.items.map(tag => tag.book.price).reduce((a,b)=> a + b, 0)
    }
}
