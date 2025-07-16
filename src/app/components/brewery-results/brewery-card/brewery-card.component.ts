import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/models/brewery-model';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.scss']
})
export class BreweryCardComponent {
  @Input() breweryInfo?: Brewery;
  @Input() isSelected: boolean = false;
}
