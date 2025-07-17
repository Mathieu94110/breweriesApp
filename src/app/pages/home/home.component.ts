import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantMapComponent } from 'src/app/components/restaurant-map/restaurant-map.component';
import { RestaurantResult, RestaurantsResponse } from 'src/app/models/world-wild-restaurant-model';
import { WorldWideRestaurantService } from 'src/services/worldwide-restaurant.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private readonly restaurantService: WorldWideRestaurantService) { }
  @ViewChild(RestaurantMapComponent) osmMap: RestaurantMapComponent | undefined;
  protected results: RestaurantResult[] = [];
  protected readonly selectedRestaurant$: Observable<RestaurantResult | null> =
    this.restaurantService.selectedRestaurant$

  setDisplayedResults(results: RestaurantsResponse) {
    this.results = results.results.data
  }

  clearAll() {
    this.osmMap!.clearAll();
  }
}
