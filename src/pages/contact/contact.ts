import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	public encodeText: string='mhady';
	public encodedData: any={};
	public scannedData: any={};

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private geolocation: Geolocation) {

  }

  scanQr() {
	  	
	  	this.barcodeScanner.scan().then(barcodeData => {
	  		this.scannedData = barcodeData;
	  	}).catch(err => {
	  		console.log('Error', err);
	  	});
  }

  encodeQr() {
  	
  	this.geolocation.getCurrentPosition().then((resp) => {
  		this.encodeText = resp.coords.latitude + ' ' + resp.coords.longitude;
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

 /*
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});*/
/*
const subscription = this.geolocation.watchPosition() //Filter Out Errors
                              .subscribe(position => {
this.encodeText = position.coords.latitude + ' ' + position.coords.longitude;});

*/


}
}
