import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css','../../assets/css/bootstrap.css' ]
})
export class TvaComponent implements OnInit {

  ht : number;
  taux : number ;
  private  _tva : number; 
  ttc : number ;

  a: number ; b:number ; res: number;

   public onAddition(evt){
     this.res=Number(this.a)+Number(this.b);
  }

  public isDivEnabled(){
    return (this.b && this.b != 0)
  }

   public onDivision(evt){
     this.res=this.a / this.b;
  }

   public get tva(){ 
    this.calculer();
    return this._tva;
  }

  public onCalcul(evt){
    this.calculer();
  }
  public calculer(){  
    this._tva = this.ht  * this.taux / 100;
    this.ttc = Number(this.ht) + Number(this._tva);
  }

 

  constructor() { }

  ngOnInit() {
  }

}
