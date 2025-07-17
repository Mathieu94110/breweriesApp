import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantResultsComponent } from './restaurant-results.component';
import { RestaurantResult } from 'src/app/models/world-wild-restaurant-model';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RestaurantResultsComponent', () => {
  let component: RestaurantResultsComponent;
  let fixture: ComponentFixture<RestaurantResultsComponent>;

  const mockBreweryResults: RestaurantResult[] = [
    {
      address: "Jl. Cimanuk No. 08, Bandung 40115 Indonésie",
      address_obj: {
        city: "Bandung",
        country: "Indonésie",
        postalcode: "40115",
        state: null,
        street1: "Jl. Cimanuk No. 08",
        street2: ""
      },
      ancestors: [
        {
          abbrv: null,
          location_id: "297704",
          name: "Bandung",
          subcategory: []
        },
        {
          abbrv: null,
          location_id: "2301792",
          name: "West Java",
          subcategory: []
        },
        {
          abbrv: null,
          location_id: "294228",
          name: "Java",
          subcategory: []
        },
        {
          abbrv: null,
          location_id: "294225",
          name: "Indonésie",
          subcategory: []
        }
      ],
      api_detail_url: "https://api.tripadvisor.com/api/internal/1.14/fr/location/12392000",
      awards: [],
      bearing: null,
      category: {
        key: "restaurant",
        name: "Restaurant"
      },
      cuisine: [
        { key: "10345", name: "Steakhouse" },
        { key: "9908", name: "Américaine" },
        { key: "10654", name: "Européenne" },
        { key: "10659", name: "Asiatique" },
        { key: "10690", name: "Indonésienne" },
        { key: "10648", name: "Internationale" },
        { key: "10668", name: "Grillades" },
        { key: "10665", name: "Convient aux végétariens" },
        { key: "10697", name: "Options végétaliennes" },
        { key: "10992", name: "Options sans gluten" }
      ],
      description: "",
      dietary_restrictions: [
        { key: "10665", name: "Convient aux végétariens" },
        { key: "10697", name: "Options végétaliennes" },
        { key: "10992", name: "Options sans gluten" }
      ],
      distance: null,
      distance_string: null,
      doubleclick_zone: "as.indonesia.java.bandung",
      email: "justussteakhouse@gmail.com",
      establishment_types: [
        { key: "10591", name: "Restaurants" }
      ],
      hours: {
        timezone: "Asia/Jakarta",
        week_ranges: [
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }],
          [{ open_time: 660, close_time: 1320 }]
        ]
      },
      is_candidate_for_contact_info_suppression: false,
      is_closed: false,
      is_jfy_enabled: false,
      is_long_closed: false,
      latitude: "-6.904865",
      location_id: "12392000",
      location_string: "Bandung, West Java, Java",
      longitude: "107.6205",
      name: "Justus Steakhouse Cimanuk",
      nearest_metro_station: [],
      num_reviews: "1012",
      open_now_text: "Ouvert",
      parent_display_name: "Bandung",
      phone: "+62 811-2180-880",
      photo: {
        images: {
          small: { url: "https://media-cdn.tripadvisor.com/media/photo-l/1c/e7/29/39/breakfast-corner.jpg", width: 150, height: 150 },
          thumbnail: { url: "https://media-cdn.tripadvisor.com/media/photo-t/1c/e7/29/39/breakfast-corner.jpg", width: 50, height: 50 },
          original: { url: "https://media-cdn.tripadvisor.com/media/photo-o/1c/e7/29/39/breakfast-corner.jpg", width: 900, height: 600 },
          large: { url: "https://media-cdn.tripadvisor.com/media/photo-o/1c/e7/29/39/breakfast-corner.jpg", width: 900, height: 600 },
          medium: { url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/e7/29/39/breakfast-corner.jpg", width: 550, height: 367 }
        },
        is_blessed: true,
        uploaded_date: "2023-11-19T23:17:00-0500",
        caption: "Justus Steakhouse CImanuk - Tampak Depan",
        id: "718909031"
      },
      preferred_map_engine: "default",
      price: "25 815€ - 344 196€",
      price_level: "€€ - €€€",
      ranking: "Nº 15 sur 1 448 Restaurants à Bandung",
      ranking_category: "restaurant",
      ranking_denominator: "1343",
      ranking_geo: "Bandung",
      ranking_geo_id: "297704",
      ranking_position: "16",
      rating: "4.9",
      raw_ranking: "4.851701259613037",
      subcategory: [
        { key: "sit_down", name: "Assis" }
      ],
      timezone: "Asia/Jakarta",
      web_url: "https://www.tripadvisor.fr/Restaurant_Review-g297704-d12392000-Reviews-Justus_Steakhouse_Cimanuk-Bandung_West_Java_Java.html",
      website: "http://www.justusku.co.id",
      write_review: "https://www.tripadvisor.fr/UserReview-g297704-d12392000-Justus_Steakhouse_Cimanuk-Bandung_West_Java_Java.html"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantResultsComponent],
      imports: [MatCardModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantResultsComponent);
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
  });

  it('should display the correct country', () => {
    const compiled = fixture.nativeElement;
    const matCardSubtitles = compiled.querySelectorAll('mat-card-subtitle');
    expect(matCardSubtitles[0].textContent).toContain(mockBreweryResults[0].address_obj.country);
  });

  it('should display the correct state when available', () => {
    const compiled = fixture.nativeElement;
    const matCardSubtitles = compiled.querySelectorAll('mat-card-subtitle');
    const state = mockBreweryResults[0].address_obj.state ? mockBreweryResults[0].address_obj.state : 'Aucune donnée';
    expect(matCardSubtitles[0].textContent).toContain(state);
  });

  it('should display "Aucune donnée" when website_url is empty', () => {
    component.searchedResults = [
      {
        name: 'Brewery 3',
        website: '',
        address: '789 Side St',
        city: 'Berlin',
        state: 'Berlin',
        postalcode: '10115',
        country: 'Germany',
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
    expect(matCardContent[0].textContent).toContain(mockBreweryResults[0].address_obj.postalcode);
  });
});