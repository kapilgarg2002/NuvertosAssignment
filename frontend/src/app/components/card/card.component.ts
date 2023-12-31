import { Component,Input } from '@angular/core';
import { Compound } from '../../constants/type';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() compound: Compound = {
    id: 0,
    name: '',
    desc: '',
    image: ''
  };


}
