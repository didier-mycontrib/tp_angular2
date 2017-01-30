import {Component} from '@angular/core';


/*
<router-outlet></router-outlet> sera remplacé par le résultat (changeant) de la navigation
*/
@Component({
  selector: 'app-root',
  template:`
			<header id="mainHeader" role="banner">
		       <h3>Minibank App </h3>
			</header>
			<div id="mainArea"  >
				<section id="simpleMainContent" > 
                    <router-outlet></router-outlet>				
				</section>
			</div>
			 <footer id="mainFooter" >
			... status , mentions legales , ... <a routerLink='welcome'> retour accueil </a>
			</footer>
  `,
   providers: []
})

export class AppComponent {
 
}

