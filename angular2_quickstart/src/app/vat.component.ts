import { Component } from '@angular/core';
import { ComputeService }       from './compute.service';

@Component({
    selector: 'temp-test',
    template: `
      <h3>temp test / value added tax</h3>
      price excluded of tax: <input id='price_excluded_of_tax_input' type='text' [(ngModel)]='price_excluded_of_tax' (input)='onRefresh($event)' /> <br/>
      value added tax rate (%): <input id='v_a_tax_rate_pct_input' type='text' [(ngModel)]='v_a_tax_rate_pct' (input)='onRefresh($event)' /> <br/>
      price inclusive of tax : <span id='price_inclusive_of_tax_span'>{{price_inclusive_of_tax}} </span> <br/>
    `
  })
  export class VatComponent {
      price_excluded_of_tax:number;
      v_a_tax_rate_pct:number;
      price_inclusive_of_tax:number;
    
    constructor(private computeService: ComputeService) { }


    onRefresh = function (evt : KeyboardEvent){
       this.price_inclusive_of_tax = Number(this.price_excluded_of_tax)
          + Number(this.computeService.vat(this.price_excluded_of_tax, this.v_a_tax_rate_pct));
     }
    
  }