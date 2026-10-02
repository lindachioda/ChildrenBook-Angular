import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../core/services/cart-service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth-service';
import { Auth } from '../../model/auth';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  menuOpen = false
  data:Auth[]=[]
  constructor(public cartService:CartService, public authService:AuthService){}

  toggleMenu() {
  this.menuOpen = !this.menuOpen
}
}
