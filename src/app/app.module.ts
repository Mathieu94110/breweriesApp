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
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: BreweryMapComponent }]),
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    LeafletModule,
  ],
  declarations: [AppComponent, BreweryMapComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
