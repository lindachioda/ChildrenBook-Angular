import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Books } from '../../model/books';
import { CommonModule } from '@angular/common';
import { IntToArrayPipe } from '../../shared/pipe/int-to-array-pipe';
import { CartService } from '../../core/services/cart-service';
import { HeaderForm } from '../../components/header-form/header-form';
import { SearchList } from '../../components/search-list/search-list';
import { InfoBook } from '../../components/info-book/info-book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, HeaderForm, SearchList, InfoBook],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  books:Books[]=[]
  active?:Books
  text = 'Ragazzi'

  constructor(private http:HttpClient, public cartService:CartService, private router:Router){
    this.searchBooks(this.text)
  }

  searchBooks(text:string):any{
    console.log(text)
    //${text} ci mostra array in console di elementi assegnati al dato che abbiamo digitato nell'input
    this.http.get<Books[]>(`http://localhost:3000/books?q=${text}`).subscribe(
      res=>{
        if(!res.length){
          this.router.navigateByUrl('/noresult')
          return
        }
        this.books = res
        this.text = text
        //il primo libro che compare è relativo al primo libro della lista:
       if (this.books.length > 0) {
        this.active = this.books[0];
      } else {
        this.active = undefined;
      }
        console.log(res)
      }
    )
  }

  //quando clicco il libro desiderato ho la descrizione di quel libro specifico
  setActive(book:Books):any{
    this.active = book
    console.log(book)
  }

  addToCart(active:Books):any{
    this.cartService.plusToCart(active)
  }


  ngOnInit(): void {
  }
}
