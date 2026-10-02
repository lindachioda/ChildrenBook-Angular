import { Component, Input } from '@angular/core';
import { Books } from '../../model/books';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {

  @Input() active?:Books

}
