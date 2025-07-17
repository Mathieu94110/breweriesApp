import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantMapComponent } from './restaurant-map.component';

describe('RestaurantMapComponent', () => {
  let component: RestaurantMapComponent;
  let fixture: ComponentFixture<RestaurantMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMapComponent]
    });
    fixture = TestBed.createComponent(RestaurantMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
