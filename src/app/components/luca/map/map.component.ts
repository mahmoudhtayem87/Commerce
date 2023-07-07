import {AfterViewInit, Component, Input} from '@angular/core';
import * as L from 'leaflet';
import {point} from "leaflet";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map : any;
  private markers  = Array<any>;

  @Input('points')
  private points : string = "";

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  private readPoints()
  {
    //color: red, lAT: 123.0000000000000000, lNG: 123.0000000000000000, name: Sample#color: green, lAT: 123.0000000000000000, lNG: 123.0000000000000000, name: location 2#
    let points = this.points.split('#');
    points.forEach(point=>{
      point = point.replaceAll(' ','');
      let pointData = point.split(',');
      let pointObj = {
        color:'',
        lat:'',
        lng:'',
        name:''
      }
      pointData.forEach(pointDataElement=>{
        let temp = pointDataElement.split(':');
        // @ts-ignore
        pointObj[temp[0].toLowerCase()] = temp[1];
      });
      console.log(pointObj)
      this.addMarker(pointObj);
    });
  }
  public addMarker(pointObj:any)
  {
    let circle = L.circle([pointObj.lat,pointObj.lng], {
      color: pointObj.color,
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);
    // @ts-ignore
    this.markers.push(circle);

  }
  ngAfterViewInit(): void {
    this.initMap();
    console.log(this.points);
    this.readPoints();
  }
}
