import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService{
    constructor (private http:HttpClient){}

    sendCredential(model){
        let tokenUrl1 = "http://localhost:8080/user/login";
        let headers1 = new HttpHeaders({'Content-type':'application/json'});
        return this.http.post(tokenUrl1,
        JSON.stringify(model),
        {headers: headers1}
        );
    }

    sendToken(token){
        let tokenUrl2 = "http://localhost:8080/rest/user/users";
        let getHeaders = new HttpHeaders({'Authorization':'Bearer '+token});
        return this.http.get(tokenUrl2,{headers: getHeaders})
    }

    logout(){
        localStorage.setItem("token","");
        localStorage.setItem("currentUserName",'');
        alert("You just logged Out");
    }
    
    checkLogin(){
        if(localStorage.getItem("currentUserName")!=null&& localStorage.getItem("currentUserName")!='' && localStorage.getItem("token")!=null && localStorage.getItem("token")!=''){
            return true;
        }else{
            return false;
        }
    }
}