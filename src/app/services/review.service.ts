import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Review } from '../models/Review';
@Injectable()
export class ReviewService{
    constructor (private http: HttpClient){}

    sendReview(doc:Review){
        let url = "http://localhost:8080/rest/user/review";
        let getHeaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.post(url,JSON.stringify(doc),{headers: getHeaders });
        
    }

}