import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WorldWideRestaurantService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private currency = environment.currency;
  private language = environment.language;
  private locationId = environment.locationId;
  public selectedRestaurant$ = new BehaviorSubject<any | null>(null);

  constructor(private http: HttpClient) { }

  getRestaurants(search: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('query', search);
    body.set('location_id', this.locationId);
    body.set('language', this.language);
    body.set('currency', this.currency);

    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiKey)
      .set('x-rapidapi-host', 'worldwide-restaurants.p.rapidapi.com')
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any>(`${this.apiUrl}/search`, body.toString(), { headers });
  }

  setSelectedRestaurant(value: any): void {
    this.selectedRestaurant$.next(value);
  }
}
