import { Component } from '@angular/core';
//import { MY_FOTO } from "../../trunk/foto-pokaz.data";
//import { FotoPokazMapa } from "../../trunk/foto-pokaz.model";
@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
//export class GoogleMapsComponent implements OnInit {
export class GoogleMapsComponent {
  //title: string = "miejsca gdzie wykonano zdjęcia";
  lat0: number = 46.301435;
  lng0: number = 16.88355;
  zblizenie: number = 4;

  markers: marker[] = [
    {lat: 54.813302, lng: 17.839649, label: "", draggable: false},
{lat: 54.799034, lng: 17.835041, label: "", draggable: false},
{lat: 54.804120, lng: 17.779235, label: "", draggable: false},
{lat: 54.806891, lng: 17.807788, label: "", draggable: false},
{lat: 54.806996, lng: 17.8078903, label: "", draggable: false},
{lat: 50.165973, lng: 19.628626, label: "", draggable: false},
{lat: 50.826467, lng: 19.113610, label: "", draggable: false},
{lat: 51.507020, lng: -0.075777, label: "", draggable: false},
{lat: 51.507020, lng: -0.075777, label: "", draggable: false},
{lat: 51.504743, lng: -0.077343, label: "", draggable: false},
{lat: 51.496214, lng: -0.176399, label: "", draggable: false},
{lat: 48.142403, lng: 17.102315, label: "", draggable: false},
{lat: 48.142403, lng: 17.102315, label: "", draggable: false},
{lat: 48.142403, lng: 17.102315, label: "", draggable: false},
{lat: 49.753229, lng: -125.296373, label: "", draggable: false},
{lat: 49.753229, lng: -125.296373, label: "", draggable: false},
{lat: 49.743422, lng: -125.301295, label: "", draggable: false},
{lat: 49.742518, lng: -125.315005, label: "", draggable: false},
{lat: 49.841760, lng: -125.622203, label: "", draggable: false},
{lat: 49.638711, lng: -125.104224, label: "", draggable: false},
{lat: 49.644596, lng: -125.099462, label: "", draggable: false},
{lat: 49.683561, lng: -125.029797, label: "", draggable: false},
{lat: 49.683561, lng: -125.029797, label: "", draggable: false},
{lat: 49.683561, lng: -125.029797, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852786, lng: -125.097313, label: "", draggable: false},
{lat: 50.043403, lng: -125.309113, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.852550, lng: -125.095961, label: "", draggable: false},
{lat: 49.705861, lng: -124.869621, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753279, lng: -125.296471, label: "", draggable: false},
{lat: 49.753655, lng: -125.295402, label: "", draggable: false},
{lat: 50.049491, lng: -125.255866, label: "", draggable: false},
{lat: 50.049491, lng: -125.255866, label: "", draggable: false},
{lat: 50.049491, lng: -125.255866, label: "", draggable: false},
{lat: 50.049491, lng: -125.255866, label: "", draggable: false},
{lat: 50.074699, lng: -125.295794, label: "", draggable: false},
{lat: 49.668983, lng: -124.918441, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.711183, lng: -124.889130, label: "", draggable: false},
{lat: 49.664490, lng: -124.903035, label: "", draggable: false},
{lat: 49.664490, lng: -124.903035, label: "", draggable: false}
  ]

  labelOptions = {
    color: "#CC40A0",
    fontFamily: "",
    fontSize: "14px",
    fontWeight: "bold",
    text: "Some Text"
  };
  MapTypeStyle = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 45
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#4f595d"
        },
        {
          visibility: "on"
        }
      ]
    }
  ];

  constructor() {}

  // ngOnInit() {}
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}