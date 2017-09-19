import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CaddyService } from "app/caddy.service";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  
  @Output()
  disconnectEvent : EventEmitter<{value:string}>
     = new  EventEmitter<{value:string}>();

  caddySize : number = 0;

  @Input()
  title : string ="?";

  @Input()
  companyName : string ="?";

  constructor(private caddyService : CaddyService ){
    caddyService.bsCompteur.subscribe( nextValueOfCompteur => this.caddySize = nextValueOfCompteur);
  }

onFireDisconnectEvent(evt){
    this.disconnectEvent.emit({value: "fin"});
  }  


  ngOnInit() {
  }

}
