import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from '../../model/books';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-list',
  imports: [CommonModule],
  templateUrl: './search-list.html',
  styleUrl: './search-list.scss',
})
export class SearchList {

  @Input() text: string =''
  @Input() books: Books[] = []
  @Input() active?: Books
  @Output() setActive: EventEmitter<Books> = new EventEmitter<Books>()

}
