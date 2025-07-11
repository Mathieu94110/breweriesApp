import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryMetadata, type Brewery } from 'src/app/models/brewery-model';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private baseUrl = 'https://api.openbrewerydb.org/v1/breweries';


  constructor(private http: HttpClient) { }

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

  getBreweriesMetaData(): Observable<BreweryMetadata> {
    return this.http.get<BreweryMetadata>(`${this.baseUrl}/breweries/meta`);
  }

  getBreweriesMetaDataByCountry(country: string): Observable<BreweryMetadata> {
    return this.http.get<BreweryMetadata>(`${this.baseUrl}/breweries/meta?by_country=${country}`);
  }

}
