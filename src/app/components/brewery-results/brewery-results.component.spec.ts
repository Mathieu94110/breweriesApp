import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryResultsComponent } from './brewery-results.component';
import { Brewery } from 'src/app/models/brewery-model';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BreweryResultsComponent', () => {
  let component: BreweryResultsComponent;
  let fixture: ComponentFixture<BreweryResultsComponent>;

  const mockBreweryResults: Brewery[] = [
    {
      id: '1',
      name: 'Brewery 1',
      brewery_type: 'Microbrewery',
      address_1: '123 Main St',
      address_2: null,
      address_3: null,
      city: 'Paris',
      state_province: 'Ile-de-France',
      postal_code: '75001',
      country: 'France',
      longitude: 2.3522,
      latitude: 48.8566,
      phone: '0123456789',
      website_url: 'http://brewery1.com',
      state: 'Paris',
      street: 'Main Street',
    },
    {
      id: '2',
      name: 'Brewery 2',
      brewery_type: 'Brewpub',
      address_1: '456 Another St',
      address_2: 'Building A',
      address_3: null,
      city: 'Brussels',
      state_province: 'Brussels-Capital',
      postal_code: '1000',
      country: 'Belgium',
      longitude: 4.3525,
      latitude: 50.8503,
      phone: '0987654321',
      website_url: 'http://brewery2.com',
      state: 'Brussels',
      street: 'Another Street',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryResultsComponent],
      imports: [MatCardModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryResultsComponent);
    component = fixture.componentInstance;
    component.searchedResults = mockBreweryResults;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of results', () => {
    const compiled = fixture.nativeElement;
    const matCards = compiled.querySelectorAll('mat-card');
    expect(matCards.length).toBe(mockBreweryResults.length);
  });

  it('should display the correct name for each brewery', () => {
    const compiled = fixture.nativeElement;
    const matCardTitles = compiled.querySelectorAll('mat-card-title');
    expect(matCardTitles[0].textContent).toContain(mockBreweryResults[0].name);
    expect(matCardTitles[1].textContent).toContain(mockBreweryResults[1].name);
  });

  it('should display the correct country and state', () => {
    const compiled = fixture.nativeElement;
    const matCardSubtitles = compiled.querySelectorAll('mat-card-subtitle');
    expect(matCardSubtitles[0].textContent).toContain(mockBreweryResults[0].country);
    expect(matCardSubtitles[1].textContent).toContain(mockBreweryResults[1].country);
    expect(matCardSubtitles[0].textContent).toContain(mockBreweryResults[0].state);
    expect(matCardSubtitles[1].textContent).toContain(mockBreweryResults[1].state);
  });

  it('should display "Aucune donnée" when website_url is empty', () => {
    component.searchedResults = [
      {
        id: '3',
        name: 'Brewery 3',
        brewery_type: 'Nanobrewery',
        address_1: '789 Side St',
        address_2: null,
        address_3: null,
        city: 'Berlin',
        state_province: 'Berlin',
        postal_code: '10115',
        country: 'Germany',
        longitude: 13.4050,
        latitude: 52.5200,
        phone: '1112233445',
        website_url: '',
        state: 'Berlin',
        street: 'Side Street',
      },
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const websiteUrlText = compiled.querySelector('mat-card-content').textContent;
    expect(websiteUrlText).toContain('Aucune donnée');
  });

  it('should display the postal code correctly', () => {
    const compiled = fixture.nativeElement;
    const matCardContent = compiled.querySelectorAll('mat-card-content');
    expect(matCardContent[0].textContent).toContain(mockBreweryResults[0].postal_code);
    expect(matCardContent[1].textContent).toContain(mockBreweryResults[1].postal_code);
  });
});
