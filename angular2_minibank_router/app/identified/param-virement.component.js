System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2;
    var ParamVirementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            ParamVirementComponent = (function () {
                function ParamVirementComponent(_router, route) {
                    this._router = _router;
                    this.route = route;
                    this.transfert = { "montant": 50, "numCptDeb": 1, "numCptCred": 2 };
                    //this.clientId = routeParams.get('clientId');
                }
                ParamVirementComponent.prototype.doVirementAndRefresh = function () {
                    console.log("doVirementAndRefresh() : " + this.transfert.montant);
                    //simulation (sans ws REST)
                    /*
                    for(i=0; i< this.comptes.length; i++){
                        if(this.comptes[i].numero == this.transfert.numCptDeb){
                            this.comptes[i].solde -= Number(this.transfert.montant);
                        }
                        if(this.comptes[i].numero == this.transfert.numCptCred){
                            this.comptes[i].solde += Number(this.transfert.montant);
                        }
                    }
                    
                    this.message = "le montant de " + this.transfert.montant +
                                    " a bien ete transfere du compte " + this.transfert.numCptDeb +
                                      " vers le compte " + this.transfert.numCptCred;
                                          
                    this.renderPath="listeComptes";
                */
                };
                ;
                ParamVirementComponent = __decorate([
                    core_1.Component({
                        selector: 'param-virement',
                        template: "\n   <div id=\"divVirement\" style=\"background-color:rgb(160,160,250); margin:3px; padding:3px;\" >\n        <h3> parametrage virement </h3> \n\t\t   <label for=\"montant\">montant :</label> <input id=\"montant\" [(ngModel)]=\"transfert.montant\"  /> <br/>\n           <label for=\"numCptDeb\">numCptDeb :</label> <input id=\"numCptDeb\" [(ngModel)]=\"transfert.numCptDeb\"  /> <br/>\n           <label for=\"numCptCred\">numCptCred :</label> <input id=\"numCptCred\" [(ngModel)]=\"transfert.numCptCred\"  /> <br/>\n\t\t  <button (click)=\"doVirementAndRefresh()\">effectuer le virement</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.ActivatedRoute])
                ], ParamVirementComponent);
                return ParamVirementComponent;
            }());
            exports_1("ParamVirementComponent", ParamVirementComponent);
        }
    }
});
//# sourceMappingURL=param-virement.component.js.map