import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/models/brewery-model';
import { BreweryService } from 'src/services/brewery.service';

@Component({
  selector: 'app-brewery-results',
  templateUrl: './brewery-results.component.html',
  styleUrls: ['./brewery-results.component.scss']
})
export class BreweryResultsComponent {
  @Input() searchedResults: Brewery[] = [];
  @Input() selectedBrewery: Brewery | null = null;

  constructor(private breweryService: BreweryService) { }

  selectBrewery(brewery: Brewery) {
    this.breweryService.setSelectedBrewery(brewery)
  }
}
