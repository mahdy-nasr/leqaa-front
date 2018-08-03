import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyconveyPage } from '../myconvey/myconvey';
import { QrscanPage } from '../qrscan/qrscan';
import { GuestPage } from '../guest/guest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BasePage } from '../base/base';
import { HTTP } from '@ionic-native/http';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any;
  guest: any;
  convey:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner, private http: HTTP) {

    this.user =  this.navParams.get('user');
    this.initConvey();
  }

  initConvey()
  {
    this.http.post('http://142.93.88.110/getConvey', {conveyId:this.user.conveyId}, {})
      .then(data => {
         this.convey = JSON.parse(data.data);
         


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

  navToConveyPage()
  {
  	this.navCtrl.push(BasePage, {user:this.user, convey:this.convey});
  }

  navToQrScanPage()
  {
  	this.barcodeScanner.scan().then(barcodeData => {

      this.getGuest(barcodeData.text);

	  		
	  	}).catch(err => {
	  		console.log('Error', err);
	});
  	
  }
  getGuest(qr){
     this.http.post('http://142.93.88.110/getqruser', {qrCode:qr}, {})
      .then(data => {

         this.guest = JSON.parse(data.data);

         this.navCtrl.push(GuestPage, {guestUser: this.guest, user:this.user});
         console.log(data.data);


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  

}
