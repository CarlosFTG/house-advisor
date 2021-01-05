import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { Map } from 'ol';
import View from 'ol/View';
import WKT from 'ol/format/WKT';
import TileLayer from 'ol/layer/Tile.js';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import MultiLineString from 'ol/geom/MultiLineString';
import { OSM } from 'ol/source';
import Collection from 'ol/Collection';
import { StyleService } from './style.service';
import { CoordinatesModel } from '../models/coordinates';

@Injectable({
  providedIn: 'root'
})


export class MapService {

  assets_base = 'assets/img/';

  private mapOut = new BehaviorSubject<Map>(null);
  private userPositionOut = new BehaviorSubject<any[]>(null);
  private coordinatesOut = new BehaviorSubject<CoordinatesModel>(null);

  sendMap$ = this.mapOut.asObservable();
  sendUserPositionToInfoCard$ = this.userPositionOut.asObservable();
  coordinates$ = this.coordinatesOut.asObservable();

  map;
  layers = [];
  view;
  format = new WKT();
  streets;
  registrationHouseCollection = new Collection;

  constructor(private httpClient: HttpClient, private styleService: StyleService) {
    this.renderMap();
    //this.getBikeStations().subscribe(data => this.renderMap(data));
    // this.getStreets().subscribe(data => {
    //   this.streets = data
    // })
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  get map$() {
    return this.map;
  }

  renderMap() {
    this.layers = [
      new TileLayer({
        name: 'base',
        source: new OSM({
          key: 'AlqHetBTtIFed0g61VUmEq079AmyyXfR9FPcqzBt13dvYZsuowl7ZTMFtWJik0LL',
          imagerySet: ['AerialWithLabelsOnDemand']
        })
      })
    ]

    this.view = new View({
      center: this.format.readFeature('POINT(-3.703382 40.415845)', { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }).getGeometry().getCoordinates(),
      zoom: 17,
      maxZoom: 20,
    });
    this.map = new Map({
      layers: this.layers,
      target: document.getElementById('map'),
      controls: [],
      view: this.view,
      //interactions: interactions

    });
    this.mapOut.next(this.map)
  }

  createRegistrationFeature(regisTrationCoordinates: string){

    let formatCoords= 'POINT('+regisTrationCoordinates[0]+ ' '+ regisTrationCoordinates[1]+" 216.7"+')';

    let registrationCoords = this.format.readFeature(formatCoords.replace(
      /[\W]*\S+[\W]*$/, '') + ')', { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }).getGeometry().getCoordinates();

    let registrationFeature = new Feature({
      geometry: new Point(registrationCoords)
    });

    let coordsObj: CoordinatesModel ={
      'lat':parseFloat(regisTrationCoordinates[0]),
      'lng':parseFloat(regisTrationCoordinates[1])
    }

    this.notifyCoords(coordsObj);

    this.styleService.applyStyleToMarker(registrationFeature);

    this.registrationHouseCollection.push(registrationFeature);

    let registrationHouseLayer = new VectorLayer({
			name: 'registrationPoint',
			source: new VectorSource({
				features: this.registrationHouseCollection
			})
    })
    
    this.map$.addLayer(registrationHouseLayer);
  }

  notifyCoords(coords: CoordinatesModel){
    this.coordinatesOut.next(coords);
  }
}