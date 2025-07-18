import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home.component';
import { WorldWideRestaurantService } from 'src/services/worldwide-restaurant.service';
import { RestaurantMapComponent } from 'src/app/components/restaurant-map/restaurant-map.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { RestaurantResultsComponent } from 'src/app/components/restaurant-results/restaurant-results.component';
import { MatSelectModule } from '@angular/material/select';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        LeafletModule,
        BrowserAnimationsModule
      ],
      declarations: [
        HomeComponent,
        RestaurantMapComponent,
        SearchComponent,
        RestaurantResultsComponent
      ],
      providers: [
        {
          provide: WorldWideRestaurantService,
          useValue: jasmine.createSpyObj('WorldWideRestaurantService', ['getRestaurants'])
        }
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect initial component changes
  });

  it('should create', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
