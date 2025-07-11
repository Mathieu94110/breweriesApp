import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/models/brewery-model';

@Component({
  selector: 'app-brewery-results',
  templateUrl: './brewery-results.component.html',
  styleUrls: ['./brewery-results.component.scss']
})
export class BreweryResultsComponent {
  @Input() searchedResults: Brewery[] = [];

}
