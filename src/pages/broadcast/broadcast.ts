import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { DateTimeData } from '../../../node_modules/ionic-angular/umd/util/datetime-util';
import { HTTP } from '@ionic-native/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the BroadcastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 

@Component({
  selector: 'page-broadcast',
  templateUrl: 'broadcast.html',
})
export class BroadcastPage {

  dataa:any [];
  convey_id = 1;
  message:any;
  myDate: String = new Date().toISOString();

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private toastCtrl: ToastController) {

    this.http.post('http://142.93.88.110/getBroadcasts', {conveyId:this.navParams.get('user').conveyId}, {})
      .then(data => {
        this.dataa = JSON.parse(data.data);
      
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        console.log("hellow");
        console.log(this.dataa);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

  

}


