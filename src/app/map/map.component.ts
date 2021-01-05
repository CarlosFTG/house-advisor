import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

import { Map } from 'ol';
import { MatDialog } from '@angular/material/dialog';
import { HouseRegistrationFormComponent } from '../house-registration/house-registration-form/house-registration-form.component';

import * as olProj from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map;
  bikeStations: any[];

  constructor(private mapService: MapService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.mapService.renderMap();
  }

  getCoord(event: any){
    let coords = this.mapService.map$.getEventCoordinate(event);

    var lonlat = olProj.transform(coords, 'EPSG:3857', 'EPSG:4326');

    this.mapService.createRegistrationFeature(lonlat);
    const dialogRef = this.dialog.open(HouseRegistrationFormComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   //this.animal = result;
    // });
 }

}
