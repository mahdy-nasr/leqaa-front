import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from  '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  
  mobile: any;
  password: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {

  }

  doLogin(){

    console.log(this.mobile)

    this.http.post('http://142.93.88.110/loginuser', {'mobile':'112233', 'password':'mahdy'}, {'Content-Type': 'application/json'})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

}
