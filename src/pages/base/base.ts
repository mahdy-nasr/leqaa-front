import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyconveyPage } from '../myconvey/myconvey';
import { GuestconveyPage } from '../guestconvey/guestconvey';
import { BroadcastPage } from '../broadcast/broadcast'
import { ShowEventPage } from '../show-event/show-event'

@Component({
  templateUrl: 'base.html'
})
export class BasePage {

  tab1Root = MyconveyPage;
  tab2Root = ShowEventPage;
  tab3Root = GuestconveyPage;
  tab4Root = BroadcastPage;
  pageParam : any;
    
  constructor(public navParams: NavParams) {
  	this.pageParam = {user:this.navParams.get('user'), convey: this.navParams.get('convey')};
  }
}
