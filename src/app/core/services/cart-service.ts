import { Injectable } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { Books } from '../../model/books';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  items:CartItem[] = []

  constructor(private authService:AuthService){}

  //metodo per aggiungere libri nel carrello
  plusToCart(book:Books):any{
    //this.items.push({
     // book: book,
     // creationDate: Date.now()
   // })

   //SPREAD OPERATOR per creare una copia dell'oggetto per non modificare oggetto originale!
   let index = this.items.findIndex(i => i.book.id === book.id)
   //se non ho elementi nell'array me li aggiungi
   if(!this.items[index]){
   this.items = [
    ...this.items,
    {
      book: book,
      creationDate: Date.now(),
      //la quantità di libri che vengono aggiunti o tolti dal carrello:
      count: 1
    }
   ]
   //in cart.html e nav.html rendi dinamico il numero di add!!
   console.log(this.items.length)
  } else if (this.items[index]){
    this.increment(book)
  }
}

  //metodo per togliere livri dal carrello
  //mi deve restituire tutti i valori diversi dalla creationDate di cartItem
  minusToCart(cartItem:CartItem):any{
    this.items = this.items.filter(item=> item.creationDate !== cartItem.creationDate)
  }

  //per aggiungere un libro alla volta
  increment(book:Books):any{
    let index = this.items.findIndex(i => i.book.id === book.id)
    //aggiungi il prezzo non moltiplicando il prezzo attuale nel carrello ma aggiungendo il prezzo di un item!!
    this.items[index].book.price += book.price / this.items[index].count
    //infine aumenta il numero di item del carrello
    this.items[index].count++
  }

  //per togliere un libro alla volta
  decrement(book:Books):any{
    let index = this.items.findIndex(i => i.book.id === book.id)
    this.items[index].book.price -= book.price / this.items[index].count
    this.items[index].count--
    //per far si che venga eliminato del tutto una volta arrivato a zero:
    if(this.items[index].count === 0){
      this.minusToCart(this.items[index])
    }
  }

  //button proceed per l'acquisto
  proceed():any{
    window.alert(`Ciao ${this.authService.data?.name}! Totale libri: ${this.items.length}`)
  }
}
