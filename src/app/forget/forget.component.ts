import { Component } from '@angular/core';
import { ForgetService } from '../services/forget.service';

@Component({
  selector: 'forget-app',
  templateUrl: './forget.component.html',
})

export class ForgetComponent {
    public forget = {'mail':''};
    public currentUserName;
    send: boolean = false;
    constructor (public forgetService: ForgetService){
        this.currentUserName=localStorage.getItem("currentUserName");
    }

    onSubmit(){
        this.forgetService.forgetPassword(this.forget).subscribe(
            data => {
                this.send=true;
                    console.log("forgetcomponentts")
                }
        );
    }
}
