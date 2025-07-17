import { Component, Input } from '@angular/core';
import { RestaurantResult } from 'src/app/models/world-wild-restaurant-model';
import { WorldWideRestaurantService } from 'src/services/worldwide-restaurant.service';

@Component({
  selector: 'app-restaurant-results',
  templateUrl: './restaurant-results.component.html',
  styleUrls: ['./restaurant-results.component.scss']
})
export class RestaurantResultsComponent {
  @Input() searchedResults: RestaurantResult[] = [];
  @Input() selectedRestaurant: RestaurantResult | null = null;

  constructor(private restaurantService: WorldWideRestaurantService) { }

  selectRestaurant(restaurant: RestaurantResult) {
    this.restaurantService.setSelectedRestaurant(restaurant)
  }
}
