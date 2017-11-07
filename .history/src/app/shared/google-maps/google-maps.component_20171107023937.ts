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

  constructor() {}

  // ngOnInit() {}
}
