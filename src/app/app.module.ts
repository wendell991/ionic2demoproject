import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddProjectPage } from '../pages/add-project/add-project';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProjectStorageProvider } from '../providers/project-storage/project-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	AddProjectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	AddProjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, AuthServiceProvider, ProjectStorageProvider
  ]
})
export class AppModule {}
