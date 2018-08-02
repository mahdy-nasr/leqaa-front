import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyconveyPage } from '../myconvey/myconvey';
import { QrscanPage } from '../qrscan/qrscan';
import { GuestPage } from '../guest/guest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  navToConveyPage()
  {
  	this.navCtrl.push(MyconveyPage, {});
  }

  navToQrScanPage()
  {
  	this.barcodeScanner.scan().then(barcodeData => {
	  		this.navCtrl.push(GuestPage, {userId: barcodeData.text});
	  	}).catch(err => {
	  		console.log('Error', err);
	});
  	
  }

}
