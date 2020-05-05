import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ForgetService{
    constructor (private http:HttpClient){}
    forgetPassword(mail){
        let tokenUrl1 = "http://localhost:8080/user/forgetPassword";
        let headers1 = new HttpHeaders({'Content-type':'application/json'});
        return this.http.post(tokenUrl1,JSON.stringify(mail),{headers: headers1});
    }

    resetPassword(mail){
        let tokenUrl1 = "http://localhost:8080/rest/user/reset";
        let headers1 = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.post(tokenUrl1,JSON.stringify(mail),{headers: headers1});
    }
    
    checkLogin(){
        if(localStorage.getItem("currentUserName")!=null&& localStorage.getItem("currentUserName")!='' && localStorage.getItem("token")!=null && localStorage.getItem("token")!=''){
            return true;
        }else{
            return false;
        }
    }
}