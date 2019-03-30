import { AuthService } from './../servicios/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
constructor(public authservice : AuthService){

}
  OnLogout(){
    this.authservice.logout();
  }

}
