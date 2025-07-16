import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreweryMetadata, type Brewery } from 'src/app/models/brewery-model';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private baseUrl = 'https://api.openbrewerydb.org/v1/breweries';
  constructor(private http: HttpClient) { }

  public selectedBrewery$ = new BehaviorSubject<Brewery | null>(null);

  getOneBrewery(id: string): Observable<Brewery> {
    return this.http.get<Brewery>(`${this.baseUrl}/${id}`);
  }

  getRandomBrewery(): Observable<Brewery> {
    return this.http.get<Brewery>(`${this.baseUrl}/random`);
  }

  getBreweriesList(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(`${this.baseUrl}/breweries`);
  }

  getSearchedBreweries(search: string): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(`${this.baseUrl}/search?query=${search}
`);
  }

  getSearchedRestaurants(search: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1b618589dmsh444d47cd7f2d14bp138ac1jsnec05d091363c',
      'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // Paramètres à envoyer dans le corps de la requête (dépend de l'API que tu utilises)
    const data = `query=${search}`;

    return this.http.post<any>(`${this.baseUrl}/search`, data, { headers });
  }

  getBreweriesMetaData(): Observable<BreweryMetadata> {
    return this.http.get<BreweryMetadata>(`${this.baseUrl}/breweries/meta`);
  }

  getBreweriesMetaDataByCountry(country: string): Observable<BreweryMetadata> {
    return this.http.get<BreweryMetadata>(`${this.baseUrl}/breweries/meta?by_country=${country}`);
  }
  setSelectedBrewery(value: Brewery): void {
    this.selectedBrewery$.next(value);
  }
}
