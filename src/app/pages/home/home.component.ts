import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryMapComponent } from 'src/app/components/brewery-map/brewery-map.component';
import { Brewery } from 'src/app/models/brewery-model';
import { BreweryService } from 'src/services/brewery.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private readonly breweryService: BreweryService) { }
  @ViewChild(BreweryMapComponent) osmMap: BreweryMapComponent | undefined;
  protected results: Brewery[] = [];
  protected readonly selectedBrewery$: Observable<Brewery | null> =
    this.breweryService.selectedBrewery$

  setDisplayedResults(results: Brewery[]) {
    this.results = results
  }

  clearAll() {
    this.osmMap!.clearAll();
  }
}
