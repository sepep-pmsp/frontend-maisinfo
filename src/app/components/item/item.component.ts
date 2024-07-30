import { Component } from '@angular/core';
import { SearchBtnComponent } from '../search-btn/search-btn.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [SearchBtnComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  

}