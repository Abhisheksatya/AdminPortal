import { Component } from "@angular/core";
import { LoginService } from '../services/login.service';

@Component({
    selector: 'home-app',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']
    
})

export class HomeComponent{
    myLocalStorage;
    public log:boolean;
    constructor(public loginService: LoginService){
        this.myLocalStorage=localStorage;
    }

    onClick(){
        if(localStorage.getItem("üsername")){
            this.log=true;
        }
    }
}