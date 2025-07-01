import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryMapComponent } from './brewery-map.component';

describe('BreweryMapComponent', () => {
  let component: BreweryMapComponent;
  let fixture: ComponentFixture<BreweryMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreweryMapComponent]
    });
    fixture = TestBed.createComponent(BreweryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
