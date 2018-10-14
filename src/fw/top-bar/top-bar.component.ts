import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
//import { UserApi } from '../users/user-api';
import { AuthService } from '../auth/service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  username = '';

  constructor(private frameworkConfigService: FrameworkConfigService, private authservice:AuthService) { }

  ngOnInit() {
    //console.log(this.authservice.getAuthenticatedUser()) ; //CognitoUser {username: "connellbl",
    //this.username = this.authservice.getAuthenticatedUser().username;
    //this.username = this.authservice.signupData.username;
  }

  signOut() {
    // this.userApi.signOut();
    this.authservice.signout();
  }

}
