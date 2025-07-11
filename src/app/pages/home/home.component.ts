import { Component, ViewChild } from '@angular/core';
import { BreweryMapComponent } from 'src/app/components/brewery-map/brewery-map.component';
import { Brewery } from 'src/app/models/brewery-model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(BreweryMapComponent) osmMap: BreweryMapComponent | undefined;
  results: Brewery[] = [];

  setDisplayedResults(results: Brewery[]) {
    this.results = results
    console.log(this.results)
  }

  clearAll() {
    this.osmMap!.clearAll();
  }
}
