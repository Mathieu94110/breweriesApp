import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { RestaurantMapComponent } from './components/restaurant-map/restaurant-map.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantResultsComponent } from './components/restaurant-results/restaurant-results.component';
import { RestaurantCardComponent } from './components/restaurant-results/restaurant-card/restaurant-card.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    LeafletModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    LeafletModule,
    MatProgressSpinnerModule
  ],
  declarations: [AppComponent, RestaurantMapComponent, HomeComponent, SearchComponent, PageNotFoundComponent, RestaurantResultsComponent, RestaurantCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

