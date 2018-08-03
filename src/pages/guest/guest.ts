import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController , NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';
import { GuestconveyPage } from '../guestconvey/guestconvey';

declare var google;

@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html'
})
export class GuestPage {
  lat : any;
  lng :any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start:string;
  end :any;
  guest:any;
  user:any;
  convey:any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private http: HTTP) {
  	this.initAll();
  }
  toConveyInfo()
  {
  	this.navCtrl.push(GuestconveyPage, {convey: this.convey, user: this.guest});
  }
  initAll()
  {
  	this.user = this.navParams.get('user');
  	this.guest = this.navParams.get('guestUser');
  	this.initConvey();
  }
  initConvey()
  {
  	this.http.post('http://142.93.88.110/getConvey', {conveyId:this.guest.conveyId}, {})
      .then(data => {
         this.convey = JSON.parse(data.data);

         this.end = this.convey.location;
         this.findCurrentLocation();
         


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

 
initMap() {
	console.log("MahdyX");
	console.log(JSON.stringify({
      zoom: 7,

      center: this.start
    }));

    var pos = this.start.split(",");
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,

      center: {
            lat: parseFloat(pos[0]),
            lng: parseFloat(pos[1])
        }
    });
    this.addMarker(this.map);
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  addMarker(map:any){

		let marker = new google.maps.Marker({
		  map: map,
		  animation: google.maps.Animation.DROP,
		  position: map.getCenter()
		});

		let content = "<h4>Information!</h4>";

		this.addInfoWindow(marker, content);



	}

	addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

    findCurrentLocation() {
  	
	  	this.geolocation.getCurrentPosition().then((resp) => {
	  		this.start = resp.coords.latitude + ',' + resp.coords.longitude;
	  		 this.initMap();
	  		console.log('my location' + this.start);
	 // resp.coords.latitude
	 // resp.coords.longitude
	}).catch((error) => {
	  console.log('Error getting hhh',JSON.stringify(error));
	});
}

}