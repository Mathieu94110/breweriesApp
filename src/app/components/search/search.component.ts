import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { RestaurantsResponse } from 'src/app/models/world-wild-restaurant-model';
import { WorldWideRestaurantService } from 'src/services/worldwide-restaurant.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder, private restaurantService: WorldWideRestaurantService) { }

  searchForm!: FormGroup;
  breakpoint: number | undefined;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @Output() setDisplayedResultsEvent = new EventEmitter<RestaurantsResponse>();

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 2;
    this.searchForm = this.fb.group({
      searchTerm: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9\s]+$/) // authorize letters numbers and spaces
        ]
      ],
      searchBy: ['name'],
      country: [''],
      city: [''],
      food: ['']
    });

    this.searchForm.get('searchTerm')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(() => this.searchForm.get('searchTerm')!.valid)
    ).subscribe(value => {
      this.launchSearch();
    });
  }

  launchSearch() {
    const { searchTerm, searchBy, country, city } = this.searchForm.value;
    this.restaurantService.getRestaurants(searchTerm)
      .subscribe(
        response => {
          this.setDisplayedResultsEvent.emit(response)
        },
        error => {
          console.error('Erreur lors de la recherche de restaurants : ', error);
        }
      );
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.launchSearch();
    }
  }

  onResize(event: Event): void {
    const window = event.target as Window;
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
  }
}
