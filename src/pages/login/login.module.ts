import { NgModule } from '@angular/core';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  // imports: [
    // IonicModule.forChild(LoginPage),
  // ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
