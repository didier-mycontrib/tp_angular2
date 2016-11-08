System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var MY_PROD_APP_CONFIG, MY_DEV_APP_CONFIG, MY_APP_CONFIG_TOKEN;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("MY_PROD_APP_CONFIG", MY_PROD_APP_CONFIG = {
                "api_base_url": "http://www.xyz.com:80/minibank",
                "alternative_api_base_url": "http://www.xyz.alt.com:80/minibank",
                "mode": "production"
            });
            exports_1("MY_DEV_APP_CONFIG", MY_DEV_APP_CONFIG = {
                "api_base_url": "http://localhost:8282/minibank",
                "alternative_api_base_url": "app/data",
                "mode": "development"
            });
            //export const MY_APP_CONFIG_V3: AppConfig = { ...  };
            exports_1("MY_APP_CONFIG_TOKEN", MY_APP_CONFIG_TOKEN = new core_1.OpaqueToken('app.config'));
        }
    }
});
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
//# sourceMappingURL=app.config.js.map