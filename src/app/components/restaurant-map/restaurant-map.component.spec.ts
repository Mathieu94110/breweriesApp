import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantMapComponent } from './restaurant-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

describe('RestaurantMapComponent', () => {
  let component: RestaurantMapComponent;
  let fixture: ComponentFixture<RestaurantMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeafletModule],
      declarations: [RestaurantMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
