import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component'

// Add all operators to Observable (useful for Http)
import 'rxjs/Rx';

bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);