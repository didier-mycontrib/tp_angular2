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
    var core_1, router_1;
    var DernieresOperationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DernieresOperationsComponent = (function () {
                function DernieresOperationsComponent(/*private _router: Router,*/ route) {
                    var _this = this;
                    this.route = route;
                    this.numSelectedCpt = 0;
                    this.operations = [
                        {
                            "numero": 1,
                            "label": "achat xy",
                            "montant": -50,
                            "dateOp": "2015-01-20"
                        },
                        {
                            "numero": 2,
                            "label": "achat zz",
                            "montant": -90,
                            "dateOp": "2015-02-08"
                        },
                        {
                            "numero": 3,
                            "label": "salaire",
                            "montant": 2000,
                            "dateOp": "2015-03-18"
                        }
                    ];
                    this.route.params.forEach(function (params) {
                        _this.numSelectedCpt = Number(params['numSelectedCpt']);
                    });
                }
                DernieresOperationsComponent = __decorate([
                    core_1.Component({
                        selector: 'dernieres-operations',
                        template: "\n   <div id=\"divDernieresOperations\" style=\"background-color:rgb(250,160,160); margin:3px; padding:3px;\">\n        <h3> dernieres operations du compte {{numSelectedCpt}}</h3> \n\t\t<table border=\"1\">\n\t\t    <tr>  <th> numero </th>  <th> label </th>  <th> montant </th>   <th> date </th> </tr>\n\t\t\t<tr *ngFor=\"let opt of operations\">  <td> {{opt.numero}} </td>  <td> {{opt.label}} </td>  <td> {{opt.montant}} </td> <td> {{opt.dateOp}} </td> </tr>\n\t\t</table>\n       \n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], DernieresOperationsComponent);
                return DernieresOperationsComponent;
            }());
            exports_1("DernieresOperationsComponent", DernieresOperationsComponent);
        }
    }
});
//# sourceMappingURL=dernieres-operations.component.js.map