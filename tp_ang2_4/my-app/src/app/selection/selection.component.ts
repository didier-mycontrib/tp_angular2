import { Component, OnInit } from '@angular/core';
import { CaddyService } from "app/caddy.service";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  productName :  string = "?";

  constructor(private caddyService : CaddyService ){
  }

  onAddInCaddy(evt){
    //appel indirect de bsCompteur.next(++....); et donc declenchement de tous les subscribe(...)
    this.caddyService.addElementInCaddy(this.productName); 
  }

  ngOnInit() {
  }

}
