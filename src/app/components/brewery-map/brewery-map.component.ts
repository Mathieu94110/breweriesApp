import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

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

@Component({
  selector: 'app-brewery-map',
  templateUrl: './brewery-map.component.html',
  styleUrls: ['./brewery-map.component.scss'],
})
export class BreweryMapComponent implements OnInit, OnDestroy {
  showActions = false;
  mouseX: number = 0;
  mouseY: number = 0;
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
    // specify the path here
    iconUrl:
      'https://raw.githubusercontent.com/raulmu/assets/main/marker-icon-blue.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png',
  }) as Icon<IconOptions>;
  markerIconRed = icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    // specify the path here
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
    /*
    window.addEventListener('resize', (e) => {
      0;
      console.log('resize');
      this.trigger!.closeMenu();
    });*/
  }

  ngOnDestroy() {
    if (!this.map) {
      return;
    }
    this.map.clearAllEventListeners;
    this.map.remove();
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

  addMarker(lat: number, lng: number, markerIcon: MarkerOptions) {
    if (!this.map) {
      return;
    }
    const newMarker = marker([lat, lng], markerIcon)
      .on('click', (e) => {
        this.showActions = false;
        //this.trigger!.closeMenu();
        let circle = document.getElementById('circle');
        /*
        if (circle && this.mouseX > 5 && this.mouseY > 5) {
          circle.style.left = this.mouseX + 'px';
          circle.style.top = this.mouseY + 'px';
        }*/
        this.menuMarker = e.target;
        //this.trigger!.openMenu();
        this.showActions = true;
        if (!this.map) {
          return;
        }
      })
      .on('mouseover', (e) => { });
    this.markers.push(newMarker);
    newMarker.addTo(this.map);
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
