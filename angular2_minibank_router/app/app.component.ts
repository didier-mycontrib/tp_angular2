import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {WelcomeComponent} from './welcome.component';
import {IdentificationComponent} from './identification.component';
import {IdentifieComponent} from './identifie.component';

@Component({
  selector: 'my-app',
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
			... status , mentions legales , ... <a [routerLink]="['Welcome']"> retour accueil </a>
			</footer>
  `,
   directives: [ROUTER_DIRECTIVES] ,
   providers: []
})
@RouteConfig([
    //NB: path="relative_url_path" for href , name="logicalName" for indirect <a [routerLink]="LogicalName" />...</>
    // Welcome child route as default
    {path: '/welcomeMiniBank',          name: 'Welcome',            component: WelcomeComponent,            useAsDefault: true  },
    {path: '/identificationClient',     name: 'Identification',     component: IdentificationComponent},
	{path: '/clientItendifie/...',          name: 'Identifie',          component: IdentifieComponent}
    // path: '/clientItendifie/:clientId' or path: '/clientItendifie/...' if IdentifieComponent contains subRoutes
])
export class AppComponent {
 
}

