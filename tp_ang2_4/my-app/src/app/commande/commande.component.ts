import { Component, OnInit } from '@angular/core';
import { CaddyService } from "app/caddy.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  public contenuCaddy : string[];

  constructor(private caddyService : CaddyService ){
    caddyService.bsCaddyContent.subscribe(caddyContent => this.contenuCaddy = caddyContent);
  }

  ngOnInit() {
  }

  onViderCaddy(){
    this.caddyService.clearCaddy();
  }

}
