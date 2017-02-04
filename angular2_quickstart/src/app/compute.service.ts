import { Injectable }     from '@angular/core';
@Injectable()
export class ComputeService {
    public vat(excl_tax : number, vat_pct : number ) : number{
        return excl_tax * vat_pct / 100;
    }
}