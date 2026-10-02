import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from '../../model/books';
import { CommonModule } from '@angular/common';
import { IntToArrayPipe } from '../../shared/pipe/int-to-array-pipe';
import { Modal } from '../modal/modal';
import { CartService } from '../../core/services/cart-service';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-info-book',
  imports: [CommonModule, IntToArrayPipe, Modal],
  templateUrl: './info-book.html',
  styleUrl: './info-book.scss',
})
export class InfoBook {

  @Input() active?:Books
  @Input() items:CartItem[] = []
  @Output() addToCart: EventEmitter<Books> = new EventEmitter<Books>()

  constructor(public cartService:CartService){}

}
