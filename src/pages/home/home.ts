import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyconveyPage } from '../myconvey/myconvey';
import { QrscanPage } from '../qrscan/qrscan';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToConveyPage()
  {
  	this.navCtrl.push(MyconveyPage, {});
  }

  navToQrScanPage()
  {
  	this.navCtrl.push(QrscanPage, {});
  }

}
