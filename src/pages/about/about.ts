import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private http: HTTP) {

  }
  getRest()
  {
  	this.http.get('https://jsonplaceholder.typicode.com/posts', {}, {})
  .then(data => {

    console.log(data.status);
    console.log('data');
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error);
    console.log('error');
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }
}
