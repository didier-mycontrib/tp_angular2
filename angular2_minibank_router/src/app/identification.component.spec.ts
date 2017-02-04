import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async , tick , fakeAsync  } from '@angular/core/testing'; 
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';
import { Observable }     from 'rxjs/Observable';  // _http.get() return Observable<Response> !!!

import { IdentificationComponent }   from './identification.component';
import { AppConfig , MY_APP_CONFIG_TOKEN , MY_PROD_APP_CONFIG , MY_DEV_APP_CONFIG } from './app.config';

import {ClientAuth} from './client';
import { ClientService }   from './client.service';

import Spy = jasmine.Spy;


describe('IdentificationComponent (using async compte service)', () => {

    let comp:    IdentificationComponent;
    let fixture: ComponentFixture<IdentificationComponent>;
    let deNumClient , dePassword:      DebugElement;
    let elNumClient ,  elPassword:      HTMLInputElement;
    
    let clientServiceWithinTest : ClientService;
    
    let subClientAuth : ClientAuth;
    //let spy : any;
    let spy : Spy;
 

    beforeEach(async(() => {
            
      TestBed.configureTestingModule({
          
          imports: [ RouterTestingModule , FormsModule , HttpModule ], // FormsModule is required for [(ngModel)] in template
          providers:    [ ClientService , { provide: MY_APP_CONFIG_TOKEN, useValue: MY_DEV_APP_CONFIG }],
          declarations: [ IdentificationComponent ], 
      }).compileComponents();
        
    }));
         
    beforeEach( () => {
      fixture = TestBed.createComponent(IdentificationComponent);
      
      clientServiceWithinTest = fixture.debugElement.injector.get(ClientService);
      
   // Setup spy on the `verifyClientAuthObservableWithAlternativeTry` method
      /*//v1
     subClientAuth   =  {
              "numClient": 1,
              "password": 'pwd1',
              "ok" : true};
      spy = spyOn(clientServiceWithinTest, 'verifyClientAuthObservableWithAlternativeTry')
            .and.returnValue(Observable.of(subClientAuth));
      */
  
      spy = spyOn(clientServiceWithinTest, 'verifyClientAuthObservableWithAlternativeTry')
      .and.callFake(function(clientAuth){
          if(clientAuth.password == "pwd" + clientAuth.numClient) {
              clientAuth.ok = true; 
              }
             else {
              clientAuth.ok = false; 
              }
          return (Observable.of(clientAuth));//.delay(1000); 
          //.delay() operator cannot be used - technically imcompatible with fakeAsync ou fixture.whenStable()
      });

      comp = fixture.componentInstance; // VatComponent test instance

      deNumClient = fixture.debugElement.query(By.css('#numClientInput'));
      elNumClient = deNumClient.nativeElement;
      dePassword = fixture.debugElement.query(By.css('#passwordInput'));
      elPassword = dePassword.nativeElement;
    });
  
    it('test bonne identification', async(() => {
        comp.numClient=1;
        comp.password='pwd1'; 
        comp.onVerifPassword();
        fixture.whenStable().then(() => { // wait for async activities (observable/promise/event/...)
           fixture.detectChanges();
           expect(spy.calls.any()).toBe(true, 'verifyClientAuthObservableWithAlternativeTry should be called');
           console.log("1/pwd1 - comp.resVerifPwd:"+comp.resVerifPwd);
           expect(comp.resVerifPwd).toBe(true);
        });
      }));
    
    it('test mauvaise identification', fakeAsync(() => {
        comp.numClient=1;
        comp.password='pwdXy'; 
        comp.onVerifPassword();
        tick();//waiting inside fakeAsync
        fixture.detectChanges();
        expect(spy.calls.any()).toBe(true, 'verifyClientAuthObservableWithAlternativeTry should be called');
        console.log("1/pwdXy - comp.resVerifPwd:"+comp.resVerifPwd);
        expect(comp.resVerifPwd).toBe(false);
      }));
    
    it('test clientServiceWithinTest', () => {
        expect(clientServiceWithinTest).toBeDefined();
        //...
    });
    
  
});
