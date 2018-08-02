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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasePage,
    QrscanPage,
    MyconveyPage
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
    QrscanPage,
    MyconveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Geolocation,
    BarcodeScanner,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
