import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-guestconvey',
  templateUrl: 'guestconvey.html'
})
export class GuestconveyPage {

convey:any;
user:any;
admin:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  	this.convey = this.navParams.get('convey');
  	this.user = this.navParams.get('user');
  	this.initAdmin();
  }

  initAdmin()
  {
  	this.http.post('http://142.93.88.110/getuser', {id:this.convey.adminId}, {})
      .then(data => {
         this.admin = JSON.parse(data.data);
         


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }



}
