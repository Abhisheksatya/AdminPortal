import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Ticket} from '../models/Ticket';
import { from } from 'rxjs';

@Injectable()
export class TicketService{
    constructor (private http: HttpClient){}

    ticketBooking(ticket:Ticket){
        let url = "http://localhost:8080/rest/user/booking";
        let header1 = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.post(url,JSON.stringify(ticket),{headers: header1 });
    }

    viewTicket(status){
        let url = "http://localhost:8080/rest/user/AdminviewTicket";
        let getHeaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.post(url,JSON.stringify(status),{headers: getHeaders });
    }

    viewTicketbyid(id:number){
        let url = "http://localhost:8080/rest/"+id;
        let getHeaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.get(url,{headers: getHeaders });
    }

    sendTicket(ticket:Ticket){
        let url = "http://localhost:8080/rest/user/ticketupdate";
        let getHeaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem("token"),'Content-type':'application/json'});
        return this.http.post(url,JSON.stringify(ticket),{headers: getHeaders });  
    }
}