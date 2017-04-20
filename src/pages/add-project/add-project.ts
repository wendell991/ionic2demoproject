import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ProjectStorageProvider } from '../../providers/project-storage/project-storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
  projectName = '';	
  loading: Loading;
  constructor(private nav: NavController, private store: ProjectStorageProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}
  
  public CancelAdd(){
	  this.nav.setRoot(HomePage);
  }
  
  public addItem(){
	  this.showLoading();
	  var allowed = this.store.AddList(this.projectName);
		 if(allowed){
			 setTimeout(()=>{
				this.loading.dismiss();				
				this.nav.setRoot(HomePage);
			 });
		 } else {
			 this.showError("Error adding project");
		 }
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectPage');
  }

}
