import { OpaqueToken } from '@angular/core';

export /*interface*/ class AppConfig {
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
