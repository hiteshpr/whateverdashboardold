import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;
   constructor(private router: Router) { }
  
  onSubmit(value: any){
		console.log(value);
		this.router.navigate(['./home']);
		
	}

  ngOnInit() {
  	
  }
  private clientId:string = '1012459213166-sp7eu60bm6bkoo1788ohs645ma7phmkv.apps.googleusercontent.com';

 public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1012459213166-sp7eu60bm6bkoo1788ohs645ma7phmkv.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
       

      }, (error) => {
        
      });
  }

ngAfterViewInit(){
      this.googleInit();
}

}

