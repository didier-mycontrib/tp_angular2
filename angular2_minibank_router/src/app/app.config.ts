import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  api_base_url: string;
  alternative_api_base_url : string;
  mode: string;
}

export const MY_PROD_APP_CONFIG: AppConfig = { 
     "api_base_url": "http://www.xyz.com:80/minibank" ,
     "alternative_api_base_url": "http://www.xyz.alt.com:80/minibank" ,
     "mode": "production" 
     };

export const MY_DEV_APP_CONFIG: AppConfig = { 
     "api_base_url": "http://localhost:8282/minibank" ,
     "alternative_api_base_url": "app/data" ,
     "mode": "development"
     };

//export const MY_APP_CONFIG_V3: AppConfig = { ...  };

export const MY_APP_CONFIG_TOKEN = new OpaqueToken('app.config');


//Selection de la configuration dans app.module.ts :
/*import { AppConfig , MY_APP_CONFIG_TOKEN , MY_PROD_APP_CONFIG , MY_DEV_APP_CONFIG , MY_APP_CONFIG_V3} from './app.config';
...
@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule, AppRoutingModule , ... ],
  declarations: [ AppComponent , ...  ],
  providers:    [  { provide: MY_APP_CONFIG_TOKEN, useValue: MY_DEV_APP_CONFIG } ,
                  ClientService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { */

//Utilisation de la configuration dans un service ou un component:
/*
import { AppConfig , MY_APP_CONFIG_TOKEN} from './app.config';
...
 constructor (private _http: Http ,@Inject(MY_APP_CONFIG_TOKEN)  private myAppConfig: AppConfig ) {
    
  }
*/