import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async , tick , fakeAsync  } from '@angular/core/testing'; //si templateUrl externe
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { VatComponent }   from './vat.component';
import { ComputeService }   from './compute.service';
import { FormsModule } from '@angular/forms';

describe('VatComponent (using simple service)', () => {

    let comp:    VatComponent;
    let fixture: ComponentFixture<VatComponent>;
    let deEot, deIot , deRate:      DebugElement;
    let  elIot :      HTMLElement;
    let elEot ,  elRate:      HTMLInputElement;
    
    let computeServiceWithinTest : ComputeService;
 

    beforeEach(async(() => {
      //stub ComputeService for test purposes (will be cloned and injected)
        let   computeServiceStub = {
               vat(excl_tax : number, vat_pct : number ) : number{
                   return excl_tax * vat_pct / 100;
               }
         };
     
      
      TestBed.configureTestingModule({
          
          imports: [ FormsModule ], // FormsModule is required for [(ngModel)] in template
          providers:    [ {provide: ComputeService, useValue: computeServiceStub } ],
          declarations: [ VatComponent ], 
      }).compileComponents();
        
    }));
         
    beforeEach( () => {
      fixture = TestBed.createComponent(VatComponent);
      
      computeServiceWithinTest = fixture.debugElement.injector.get(ComputeService);

      comp = fixture.componentInstance; // VatComponent test instance

      deEot = fixture.debugElement.query(By.css('#price_excluded_of_tax_input'));
      elEot = deEot.nativeElement;
      deRate = fixture.debugElement.query(By.css('#v_a_tax_rate_pct_input'));
      elRate = deRate.nativeElement;
      deIot = fixture.debugElement.query(By.css('#price_inclusive_of_tax_span'));
      elIot = deIot.nativeElement;
    });
    
    it('20% , 200 -> 240 from model', () => {
        comp.price_excluded_of_tax=200;
        comp.v_a_tax_rate_pct=20; //20%
        comp.onRefresh(null /*not used event*/);
        fixture.detectChanges();
        console.log("from model, price_inclusive_of_vat:"+elIot.textContent);
        expect(elIot.textContent).toContain('240');
      });
    
    it('test computeServiceWithinTest', () => {
        expect(computeServiceWithinTest).toBeDefined();
        expect(computeServiceWithinTest.vat(100, 20)).toBe(20);
    });
    
  
});
