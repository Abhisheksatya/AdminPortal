import { Component } from "@angular/core";
import { LoginService } from '../services/login.service'
import { from } from 'rxjs';
@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent {
    public model = {'mail':'','password':''};
    public currentUserName;
    constructor (public loginService: LoginService){
        this.currentUserName=localStorage.getItem("currentUserName");
    }

    onSubmit(){
        this.loginService.sendCredential(this.model).subscribe(
            data => {
                localStorage.setItem("token",JSON.parse(JSON.stringify(data)).token);
                    this.loginService.sendToken(JSON.parse(JSON.stringify(data)).token).subscribe(
                        data => {
                            this.currentUserName=this.model.mail;
                            localStorage.setItem("currentUserName",this.model.mail);
                            this.model.mail='';
                            this.model.password='';
                        },
                        error => console.log(error)
                    );
            },
            error => console.log(error)  
        );
    }
}