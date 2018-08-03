import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';


import { HomePage } from '../home/home';


/**
 * Generated class for the MyconveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-myconvey',
  templateUrl: 'myconvey.html',
})
export class MyconveyPage {

	@ViewChild('map') mapElement: ElementRef;
	map: any;
	start:any ;
	end:any = '21.502051,39.179858';
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	user:any;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams, 
  	private launchNavigator: LaunchNavigator,
  	private geolocation: Geolocation
  	) {

  	this.user =  this.navParams.get('user');
  	this.start = this.user.location;
  }
  toHomePage()
  {
    this.navCtrl.push(HomePage, this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyconveyPage');
    this.findCurrentLocation();
    this.initMap();
  }

  initMap() {

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,

      center: this.start
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
	  		console.log('my location' + this.start);
	 // resp.coords.latitude
	 // resp.coords.longitude
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
}

navigateToRoute() {
	let options: LaunchNavigatorOptions = {
  start: this.start,
  transportMode: 'walking',
  app: 'google_maps'
};

this.launchNavigator.navigate(this.end, options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
}

}
