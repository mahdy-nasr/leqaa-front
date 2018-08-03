import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HomePage } from '../home/home';

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

  
  
  mobile: any = "12345";
  password: any = "12345";
  user:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {

  }

  doLogin(){

    this.http.post('http://142.93.88.110/loginuser', {mobile:this.mobile, password:this.password}, {})
      .then(data => {

        this.user = JSON.parse(data.data);
        this.navCtrl.push(HomePage,{user:this.user});
  

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

}
