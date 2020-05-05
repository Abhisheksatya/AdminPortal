import { Component, OnInit } from '@angular/core';
import {TicketService} from '../services/ticket.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Ticket } from '../models/Ticket';
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  private ticketid:number;
  public statuss:Ticket=new Ticket();
  constructor(
    private ticketService:TicketService,
    private route:ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(){
      this.route.params.forEach((params: Params)=>{
        this.ticketid=Number.parseInt(params['id']);
      });
      this.ticketService.viewTicketbyid(this.ticketid).subscribe(
          (res:Ticket)=>{
              this.statuss=res;
          },
        error =>{
          console.log(error);
        }
      );
  }

  onClick(){
    window.print();
  }

  onEdit(statuss: Ticket){
    this.ticketService.sendTicket(this.statuss).subscribe(
      data=>{
        alert("Save Status Successfully");
      },
      error => console.log(error)
    );
  }

  onReview(statuss: Ticket){
    this.router.navigate(['/app-review',this.statuss.ticketNumber]);
  }
}
