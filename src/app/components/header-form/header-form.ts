import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-form',
  imports: [FormsModule],
  templateUrl: './header-form.html',
  styleUrl: './header-form.scss',
})
export class HeaderForm {

  @Input() text:string =''
  @Output() search: EventEmitter<string> = new EventEmitter<string>() //search.emit

}
