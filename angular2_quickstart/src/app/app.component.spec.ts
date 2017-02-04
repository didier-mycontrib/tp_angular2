import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async  } from '@angular/core/testing'; //si templateUrl externe
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing'; // for <router-outlet></router-outlet> in template
import { AppComponent } from './app.component';
import { VatComponent }   from './vat.component';
import { ComputeService }   from './compute.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent (templateUrl)', () => {

    let comp:    AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de:      DebugElement;
    let el:      HTMLElement; 

    //first beaforeEach with async() for template and css initialisation.
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers:    [ ComputeService ] ,
        imports: [   RouterTestingModule , FormsModule ],  // for <router-outlet></router-outlet> in template
        declarations: [ AppComponent , VatComponent ], // declare the test component
      })
        .compileComponents();  // compile template and css;
    }));

     //second beforeEach without async() for fixture, component , debugElement , ...:
     beforeEach(() => {
         
      fixture = TestBed.createComponent(AppComponent);

      comp = fixture.componentInstance; // AppComponent test instance

      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
    });
    
    
    it('should have a defined component', () => {
        expect(comp).toBeDefined();
    });
    
    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
      });

    it('should display original title', () => {
        fixture.detectChanges();
        console.log("title:"+el.textContent);
        expect(el.textContent).toContain(comp.title);
      });

      it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
      });

    
  });
