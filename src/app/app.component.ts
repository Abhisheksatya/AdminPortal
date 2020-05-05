import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registered: boolean = !localStorage.getItem("token");
  title = 'travelPortal';
  ngOnInit(){
  if(localStorage.getItem("token")==null){
    
    this.registered = false;
  }
}
}
