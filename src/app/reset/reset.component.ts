import { Component } from '@angular/core';
import { ForgetService } from '../services/forget.service';

@Component({
  selector: 'reset-app',
  templateUrl: './reset.component.html',
  styleUrls:['./reset.component.css']
})

export class ResetComponent {
    public model = {'mail':'','password':'','temp':''};
    public currentUserName;
    send: boolean = false;
    constructor (public forgetService: ForgetService){
        this.currentUserName=localStorage.getItem("currentUserName");
    }

    onSubmit(){
        this.forgetService.resetPassword(this.model).subscribe(
            data => {
                this.send=true;
                    console.log("forgetcomponentts")
            }
        );
    }
}
