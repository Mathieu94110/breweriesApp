import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';

import {
  Map,
  MapOptions,
  tileLayer,
  latLng,
  LeafletEvent,
  icon,
  marker,
  LatLng,
  Icon,
  IconOptions,
  MarkerOptions,
  Marker,
} from 'leaflet';
import { RestaurantResult } from 'src/app/models/world-wild-restaurant-model';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.scss'],
})
export class RestaurantMapComponent implements OnInit, OnChanges, OnDestroy {
  showActions = false;
  mouseX: number = 0;
  mouseY: number = 0;
  @Input() selectedRestaurant: RestaurantResult | null = null;
  @Output() map$: EventEmitter<Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  @Input() options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoom: 15,
    center: latLng(-22.37855150766163, -41.778323650360115),
  };
  public map: Map | undefined;
  public zoom: number | undefined;
  markerIconBlue = icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl:
      'https://raw.githubusercontent.com/raulmu/assets/main/marker-icon-blue.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png',
  }) as Icon<IconOptions>;
  markerIconRed = icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl:
      'https://raw.githubusercontent.com/raulmu/assets/main/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png',
  }) as Icon<IconOptions>;
  markers: Marker[] = [];
  menuMarker: Marker | undefined;
  constructor() { }

  ngOnInit() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedRestaurant'] && this.selectedRestaurant) {
      this.updateMapWithSelectedRestaurant();
    }
  }


  ngOnDestroy() {
    if (this.map) {
      this.map?.off();
    }
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.on('click', (e) => {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      this.addMarker(lat, lng, { icon: this.markerIconBlue });
    });
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: LeafletEvent) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }

  private updateMapWithSelectedRestaurant() {
    if (this.selectedRestaurant && this.map) {
      const { latitude, longitude, photo, name, rating } = this.selectedRestaurant;
      const latNum = Number(latitude);
      const lngNum = Number(longitude);
      const imgUrl = photo.images.small.url
      // move to coordinates location
      this.map.panTo(new LatLng(latNum, lngNum));

      // Add marker on map
      this.addMarker(latNum, lngNum, { icon: this.markerIconRed });

      const popupContent = this.createPopupContent(name, rating, imgUrl);

      const popup = L.popup()
        .setContent(popupContent)
        .setLatLng([latNum, lngNum]);

      // Attach the popup to the marker
      this.map.openPopup(popup);
    }
  }

  private createPopupContent(name: string, rating: string, imgUrl: string) {
    return `
    <h3>${name}</h3>
    <p>${this.createStars(rating)}</p>
    <img src="${imgUrl}" alt='${name}'>
  `;
  }
  private createStars(rating: string) {
    const totalStars = 5;
    const filledStars = Math.round(Number(rating));
    let stars = '';

    for (let i = 0; i < totalStars; i++) {
      stars += `<span class="star ${i < filledStars ? 'filled' : ''}">&#9733;</span>`;
    }

    return stars;
  }

  addMarker(lat: number, lng: number, markerIcon: MarkerOptions) {
    if (!this.map) {
      return;
    }

    // Création du marker
    const newMarker = marker([lat, lng], markerIcon)
      .on('click', (e) => {
        this.showActions = false;
        this.menuMarker = e.target;
        this.showActions = true;
        if (!this.map) {
          return;
        }
      });

    // Ajout du marker à la carte
    this.markers.push(newMarker);
    newMarker.addTo(this.map);

    // Move the map to the marker
    this.map.panTo(new LatLng(lat, lng));
  }

  remove() {
    const index = this.markers.findIndex((value) => value == this.menuMarker!);
    this.markers.splice(index, 1);
    this.map!.removeLayer(this.menuMarker!);
    this.showActions = false;
  }
  AddToFavorites() {
    this.menuMarker!.setIcon(this.markerIconRed);
    this.showActions = false;
  }
  removeFromFavorites() {
    this.menuMarker!.setIcon(this.markerIconBlue);
    this.showActions = false;
  }
  public clearAll() {
    this.markers.map((marker) => {
      this.map!.removeLayer(marker);
    });
    this.markers = [];
    this.showActions = false;
  }
}
