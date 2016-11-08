System.register(['@angular/core', '@angular/router', '../compte.service'], function(exports_1, context_1) {
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
    var core_1, router_1, compte_service_1;
    var ListeComptesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (compte_service_1_1) {
                compte_service_1 = compte_service_1_1;
            }],
        execute: function() {
            ListeComptesComponent = (function () {
                function ListeComptesComponent(_compteService, route) {
                    this._compteService = _compteService;
                    this.route = route;
                    this.selectedCompteEvent = new core_1.EventEmitter();
                    this.clientId = 0;
                    this.comptes = null;
                }
                ListeComptesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.clientId = Number(params['clientId']);
                    });
                    //this.fetchComptes(); //maintenant dans ngAfterViewInit()
                };
                ListeComptesComponent.prototype.ngAfterViewInit = function () {
                    this.fetchComptes(); //refresh
                };
                ListeComptesComponent.prototype.fetchComptes = function () {
                    var _this = this;
                    this._compteService.getComptesOfClientObservableWithAlternativeTry(this.clientId)
                        .subscribe(function (comptes) { return _this.comptes = comptes; }, function (error) { return console.log(error); });
                };
                ListeComptesComponent.prototype.displayLastOperations = function (numCpt) {
                    console.log("affichage des operations du compte selectionne : " + numCpt);
                    this.selectedCompteEvent.emit({ value: numCpt }); // fire event with data
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ListeComptesComponent.prototype, "selectedCompteEvent", void 0);
                ListeComptesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-comptes',
                        template: "\n       <div id=\"divListeComptes\" style=\"background-color:rgb(160,250,160); margin:3px; padding:3px;\">\n        <h3> liste des comptes </h3> \n\t\t<table border=\"1\">\n\t\t    <tr>  <th> numero </th>  <th> label </th>  <th> solde </th> </tr>\n\t\t\t<tr *ngFor=\"let cpt of comptes\">  <td style='color : blue' (click)=\"displayLastOperations(cpt.numero)\"> {{cpt.numero}} </td>  <td> {{cpt.label}} </td>  <td> {{cpt.solde}} </td> </tr>\n\t\t</table>\n\t\t<i>Un click sur un numero de compte permet de obtenir la liste des dernieres operations</i>\n       \n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [compte_service_1.CompteService, router_1.ActivatedRoute])
                ], ListeComptesComponent);
                return ListeComptesComponent;
            }());
            exports_1("ListeComptesComponent", ListeComptesComponent);
        }
    }
});
//# sourceMappingURL=liste-comptes.component.js.map