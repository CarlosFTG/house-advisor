import { Injectable } from '@angular/core';

import { Style, Icon as IconStyle, Text, Fill, Stroke, Circle as CircleStyle } from 'ol/style';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  applyStyleToMarker(houseRegistrationFeature) {

    let registrarionHouseStyle = new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({
          color: 'orange',
        }),
      })
    })

    houseRegistrationFeature.setStyle(registrarionHouseStyle);
  }
}
