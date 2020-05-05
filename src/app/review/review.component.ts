import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/Ticket';
import {  Review } from '../models/Review';
import { ReviewService } from '../services/review.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  newTicket: Ticket=new Ticket();
  review :Review = new Review();
  ticketnumber: number;
  constructor(
    private ticketService: TicketService,
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private routers:Router
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>
        {this.ticketnumber=Number.parseInt(params['id']);}
      );
    this.ticketService.viewTicketbyid(this.ticketnumber).subscribe(
      (res:Ticket)=>{
        console.log("ststssttsts",res);
        this.newTicket=res;
      },
      error=>console.log(error)
    )
  }
  
  onSubmit(){
    this.review.ticketNumber=this.newTicket.ticketNumber;
    this.review.mail=this.newTicket.mail;
    this.review.adminmail=localStorage.getItem("currentUserName");
    console.log(this.review)
      this.reviewService.sendReview(this.review).subscribe(
        data=>{
          alert("send Review SuccessFully");
          this.routers.navigate(['/home-app']);
        },
        error => console.log(error)
      );
  }
}
