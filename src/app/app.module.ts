import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { BreweryMapComponent } from './components/brewery-map/brewery-map.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    LeafletModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, BreweryMapComponent, HomeComponent, SearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }