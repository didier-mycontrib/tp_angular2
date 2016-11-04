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
    var ListeComptesComponent;
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
            ListeComptesComponent = (function () {
                function ListeComptesComponent(_router, route) {
                    this._router = _router;
                    this.route = route;
                    this.clientId = 0;
                    this.comptes = [
                        {
                            "numero": 1,
                            "label": "compte 1 (courant)",
                            "solde": 600.0
                        },
                        {
                            "numero": 2,
                            "label": "compte 2 (LDD)",
                            "solde": 3200.0
                        },
                        {
                            "numero": 3,
                            "label": "compte 3 (PEL)",
                            "solde": 6500.0
                        }
                    ];
                    this.clientId = 0; //routeParams.get('clientId');
                }
                ListeComptesComponent.prototype.displayLastOperations = function (numCpt) {
                    // var identifieForThis = this;
                    //this.message = "affichage des operations du compte selectionne : " + numCpt; 	
                    //this.numSelectedCpt = numCpt;	
                    /*
                        $http.get('data/operations.json').success(function(data) {
                            identifieForThis.operations = data;
                            $log.log("nb operations" + identifieForThis.operations.length)
                        });
                        */
                    // this.renderPath="dernieresOperations";
                    this._router.navigate(['dernieresOperations', { numSelectedCpt: numCpt }]);
                };
                ListeComptesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-comptes',
                        template: "\n       <div id=\"divListeComptes\" style=\"background-color:rgb(160,250,160); margin:3px; padding:3px;\">\n        <h3> liste des comptes </h3> \n\t\t<table border=\"1\">\n\t\t    <tr>  <th> numero </th>  <th> label </th>  <th> solde </th> </tr>\n\t\t\t<tr *ngFor=\"let cpt of comptes\">  <td style='color : blue' (click)=\"displayLastOperations(cpt.numero)\"> {{cpt.numero}} </td>  <td> {{cpt.label}} </td>  <td> {{cpt.solde}} </td> </tr>\n\t\t</table>\n\t\t<i>Un click sur un numero de compte permet de obtenir la liste des dernieres operations</i>\n       \n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.ActivatedRoute])
                ], ListeComptesComponent);
                return ListeComptesComponent;
            }());
            exports_1("ListeComptesComponent", ListeComptesComponent);
        }
    }
});
//# sourceMappingURL=liste-comptes.component.js.map