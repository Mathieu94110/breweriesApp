import { Component, Input } from '@angular/core';
import { RestaurantResult } from 'src/app/models/world-wild-restaurant-model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() restaurantInfo?: RestaurantResult;
  @Input() isSelected: boolean = false;
}
