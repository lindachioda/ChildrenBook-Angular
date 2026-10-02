import { Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from '../../model/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  data:Auth | null = null

  constructor(private http:HttpClient, private router:Router){}

  login({email, pass}: any):any{
    //uso i params per passare i dati di user e pass
    const params = new HttpParams()
    .set('email',email)
    .set('pass',pass)
    this.http.get<Auth>('http://localhost:3000/login', {params}).subscribe(
      res=>{
        this.data = res
        console.log(res)
        //fatto il login vengo reindirizzato alla home
        this.router.navigateByUrl('home')
      }
    )
  }
  
  logout():any{
    this.data = null
    //mi reinderizzo al login
    this.router.navigateByUrl('login')
  }

  isLogged():any{
  //let isAuth = this.data && this.data.token ? true : false
  //return isAuth

  //in alternativa, metodo più corretto:
  // "!!" restituisci un booleano in base al risultato di data
  // se è null ? undefined
  //se non è null restituisci il token
    return !!this.data?.token
  }
}
