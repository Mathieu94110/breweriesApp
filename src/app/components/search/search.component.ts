import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9\s]+$/) // autorise lettres, chiffres, espaces
        ]
      ],
      searchBy: ['name'],
      country: [''],
      city: ['']
    });

    this.searchForm.get('searchTerm')!.valueChanges.pipe(
      debounceTime(300), // attendre 300ms après la frappe
      distinctUntilChanged(),
      filter(() => this.searchForm.get('searchTerm')!.valid)
    ).subscribe(value => {
      this.launchSearch(); // méthode de recherche automatique
    });
  }

  launchSearch() {
    const { searchTerm, searchBy, country, city } = this.searchForm.value;
    console.log('Recherche déclenchée avec :', { searchTerm, searchBy, country, city });

    // ici tu peux appeler un service ou filtrer une liste
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.launchSearch();
    }
  }
}
