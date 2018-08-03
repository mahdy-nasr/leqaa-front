import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { BasePage } from '../pages/base/base';
import { MyconveyPage } from '../pages/myconvey/myconvey';
import { QrscanPage } from '../pages/qrscan/qrscan';
import { GuestPage } from '../pages/guest/guest';
import { LoginPage} from '../pages/login/login'
import { GuestconveyPage } from '../pages/guestconvey/guestconvey'
import { BroadcastPage } from '../pages/broadcast/broadcast'
import { ShowEventPage } from '../pages/show-event/show-event'

import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasePage,
    GuestPage,
    QrscanPage,
    GuestconveyPage,
    BroadcastPage,
    ShowEventPage,
    MyconveyPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasePage,
    GuestPage,
    QrscanPage,
    GuestconveyPage,
    BroadcastPage,
    ShowEventPage,
    MyconveyPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LaunchNavigator,
    BarcodeScanner,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
