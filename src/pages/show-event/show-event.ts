import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ShowEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-show-event',
  templateUrl: 'show-event.html',
})
export class ShowEventPage {

   dataa:any [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private toastCtrl: ToastController) {
    this.http.post('http://142.93.88.110/getEvents', {conveyId:1}, {})
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

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowEventPage');
  }

}
