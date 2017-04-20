import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {
  email: string;
 
  constructor(email: string) {
    this.email = email;
  }
}
@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  public login(credentials){
	  var re = /\S+@\S+\.\S+/;
	  if(credentials.email == null || credentials.password == null){
		  return Observable.throw("Please insert credentials");
	  }else if(!re.test(credentials.email)){
		  return Observable.throw("Invalid email");
	  }else if(!(credentials.password.length>3)){
		  return Observable.throw("Invalid password");
	  }else{
		  return Observable.create(observer =>{
			  this.currentUser = new User(credentials.email);
			  observer.next(true);
			  observer.complete();
		  });
	  }
  }
  public getUserInfo(): User{
	  return this.currentUser;
  }
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
