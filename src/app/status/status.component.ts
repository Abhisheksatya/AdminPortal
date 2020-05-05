import { Component, OnInit,NgModule } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/Ticket';
import { Router } from '@angular/router';



@Component({
  selector: 'status-app',
  templateUrl: './status.component.html',
})


export class StatusComponent implements OnInit{
    public mail: string;
    check: boolean=false;
    selectticket: Ticket=new Ticket();
    public mod = {'mail':localStorage.getItem("currentUserName")};
    public tick: Ticket[];
    constructor( private ticketService : TicketService,private router:Router ){   }

    ngOnInit(){
        this.mail = localStorage.getItem("currentUserName")
        this.ticketService.viewTicket(this.mod).subscribe(
                (data:Ticket[]) =>{
                this.tick=data;
                this.check=true;
                }
            );
        error=> console.log(error);
        
    }

    onUpdate(status: Ticket){
        this.selectticket=status;
        this.router.navigate(['/app-view-ticket',this.selectticket.ticketNumber]);
    }

    onNum(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.ticketNumber - b.ticketNumber;
        });
    }

    onPer(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.priority.localeCompare(b.priority);
        });
    }

    onStatus(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.status.localeCompare(b.status);
        });
    }

    onApprover(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.approver.localeCompare(b.approver);
        });
    }

    onReqtype(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.requestType.localeCompare(b.requestType);
        });
    }

    onProject(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.project.localeCompare(b.project);
        });
    }

    onmail(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.mail.localeCompare(b.mail);
        });
    }

    onFromloc(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.fromLocation.localeCompare(b.fromLocation);
        });
    }

    onCity(tick:Ticket[]){
        tick.sort(function(a, b){
            return a.travelCity.localeCompare(b.travelCity);
        });
    }
    
    onEnd(tick:Ticket[]){
        tick.sort(function(a, b){
            return +new Date(a.startDate) - +new Date(b.startDate);
        });
    }
    
    onStart(tick:Ticket[]){
        tick.sort(function(a, b){
            return +new Date(a.startDate) - +new Date(b.startDate);
        });   
    }  
}
