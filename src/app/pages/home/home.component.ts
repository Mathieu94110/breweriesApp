import { Component, ViewChild } from '@angular/core';
import { BreweryMapComponent } from 'src/app/components/brewery-map/brewery-map.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(BreweryMapComponent) osmMap: BreweryMapComponent | undefined;

  clearAll() {
    this.osmMap!.clearAll();
  }
}
