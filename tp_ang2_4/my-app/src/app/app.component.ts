import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css' ,'../assets/css/bootstrap.css'],
  templateUrl: 'app.component.html',
   providers: []
})

export class AppComponent {
     title : string ="welcome Angular App";
     onFin(evt){
       this.title = evt.value;
       console.log("deconnexion - " +evt.value);
       //alert("deconnexion - " + evt.value);
     }
}

