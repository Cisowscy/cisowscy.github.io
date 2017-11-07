import { Component } from '@angular/core';

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
//export class GoogleMapsComponent implements OnInit {
export class GoogleMapsComponent {
  title: string = "miejsca gdzie wykonano zdjęcia";
  lat: number = 51.678418;
  lng: number = 7.809007;
  labelOptions = {
    color: "#CC0000",
    fontFamily: "",
    fontSize: "14px",
    fontWeight: "bold",
    text: "Some Text"
  };
  MapTypeStyle= [{ featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] }, { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] }, { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "all", stylers: [{ color: "#4f595d" }, { visibility: "on" }] }];

  constructor() {}

  // ngOnInit() {}
}
