import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockRestaurantResults } from 'src/app/mocks/restaurant-result.mock';

describe('RestaurantCardComponent', () => {
  let component: RestaurantCardComponent;
  let fixture: ComponentFixture<RestaurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantCardComponent],
      imports: [MatCardModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCardComponent);
    component = fixture.componentInstance;
    component.restaurantInfo = mockRestaurantResults[0];
    fixture.detectChanges();
  });

  it('should display the restaurant name correctly', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('mat-card-title');
    expect(title.textContent).toContain(mockRestaurantResults[0].name);
  });

  it('should display the restaurant location and timezone correctly', () => {
    const compiled = fixture.nativeElement;
    const subtitle = compiled.querySelector('mat-card-subtitle');
    expect(subtitle.textContent).toContain(`${mockRestaurantResults[0].location_string} ${mockRestaurantResults[0].timezone}`);
  });

  it('should display the website link when web_url is provided', () => {
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('a');
    expect(link).toBeTruthy();
    expect(link.href).toBe(mockRestaurantResults[0].web_url);
  });

  it('should display "Aucune donnée" when no web_url is provided', () => {
    component.restaurantInfo = { ...mockRestaurantResults[0], web_url: '' };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const noUrlText = compiled.querySelector('mat-card-content').textContent;
    expect(noUrlText).toContain('Aucune donnée');
  });

  it('should display "Ouvert" when the restaurant is open', () => {
    const compiled = fixture.nativeElement;
    const statusText = compiled.querySelector('p');
    expect(statusText.textContent).toContain('Ouvert');
    expect(statusText.classList).toContain('open');
  });

  it('should display "Fermé" when the restaurant is closed', () => {
    component.restaurantInfo = { ...mockRestaurantResults[0], is_closed: true };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const statusText = compiled.querySelector('p');
    expect(statusText.textContent).toContain('Fermé');
    expect(statusText.classList).toContain('closed');
  });

  it('should apply the "selected" class when isSelected is true', () => {
    component.isSelected = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const card = compiled.querySelector('mat-card');
    expect(card.classList).toContain('selected');
  });

  it('should not apply the "selected" class when isSelected is false', () => {
    component.isSelected = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const card = compiled.querySelector('mat-card');
    expect(card.classList).not.toContain('selected');
  });
});
