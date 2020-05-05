import { Component } from "@angular/core";
import { LoginService } from '../services/login.service';

@Component({
    selector: 'Nav-bar',
    templateUrl:'./Nav-bar.component.html',
    styleUrls: ['./Nav-bar.component.css'],
    
})
export class NavbarComponent{
    myLocalStorage;

    constructor(public loginService: LoginService){
        this.myLocalStorage=localStorage;
    }

    onClick(){
        if(this.loginService.checkLogin()){
            this.loginService.logout();
        }
    }
  
}