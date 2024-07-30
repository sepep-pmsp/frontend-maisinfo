import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { ItemComponent } from "../../components/item/item.component";
import { SearchBtnComponent } from "../../components/search-btn/search-btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, ItemComponent, SearchBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
