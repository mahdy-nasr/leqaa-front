import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyconveyPage } from '../myconvey/myconvey';
import { QrscanPage } from '../qrscan/qrscan';
import { GuestPage } from '../guest/guest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {

    this.user =  this.navParams.get('user');
  }

  navToConveyPage()
  {
  	this.navCtrl.push(MyconveyPage, {user:this.user});
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
