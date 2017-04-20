import {Component} from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProjectStorageProvider } from '../../providers/project-storage/project-storage';
import { LoginPage } from '../login/login';
import { AddProjectPage } from '../add-project/add-project';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email = '';
  loading: Loading;
  items = [];
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private store: ProjectStorageProvider) {
    let info = this.auth.getUserInfo();
    this.email = info.email;
	this.items = this.store.GetList();
	console.log(this.items);
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
  
  public AddProject(){
	  this.nav.setRoot(AddProjectPage);
  }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}