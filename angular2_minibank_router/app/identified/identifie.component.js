System.register(['@angular/core', '@angular/router', '@angular/common', '../client.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, client_service_1;
    var IdentifieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            }],
        execute: function() {
            IdentifieComponent = (function () {
                function IdentifieComponent(_clientService, route, location) {
                    this._clientService = _clientService;
                    this.route = route;
                    this.location = location;
                    this.action = "listeComptes"; //par defaut
                    this.numSelectedCompte = null; //selected compte for operations details 
                    this.message = "";
                    this.clientId = 0;
                }
                IdentifieComponent.prototype.fetchClient = function () {
                    /*this._clientService.getClientPromise(this.clientId)
                       .then(cli =>this.client = cli,
                             error =>  this.message = (<any>error).toString()); */
                    /* Promise.then() is good , Observable.subscribe() is better */
                    var _this = this;
                    this._clientService.getClientObservableWithAlternativeTry(this.clientId)
                        .subscribe(function (cli) { return _this.client = cli; }, function (error) { return _this.message = error; });
                };
                IdentifieComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.clientId = Number(params['clientId']);
                    });
                    this.fetchClient();
                };
                IdentifieComponent.prototype.goBack = function () {
                    this.location.back();
                };
                IdentifieComponent.prototype.onRefreshListeCompte = function (evt) {
                    this.message = evt.value;
                    this.action = "listeComptes"; // refresh effectué via ngAfterViewInit() et fetchComptes() 
                };
                IdentifieComponent.prototype.onDernieresOperations = function (evt) {
                    console.log("num Compte selectionne =" + evt.value);
                    this.numSelectedCompte = evt.value;
                    this.action = "dernieresOperations";
                };
                IdentifieComponent.prototype.onSelect = function (evt) {
                    this.action = evt.target.value;
                };
                IdentifieComponent = __decorate([
                    core_1.Component({
                        template: "\n   <div >\n        <h3>  client identifie : {{clientId}}</h3> \n\t\t<div *ngIf=\"client\" >\n\t\t\t{{client.prenom}} {{client.nom}} <br/>\n\t\t\tadresse: {{client.adresse.rue}} {{client.adresse.codePostal}} {{client.adresse.ville}} <br/>\n\t\t\ttelephone: {{client.telephone}} <br/>\n\t\t\temail: {{client.email}}\n\t\t</div>\n        <hr/>\n        <button (click)=\"goBack()\">(Retour) / deconnexion</button>\n\t\t<hr/>\n\t\t\n\t\t\n\t\taction: <select  (click)=\"onSelect($event)\" >\n\t\t    <option value=\"listeComptes\"> liste des comptes </option>\n\t\t    <option value=\"paramVirement\">effectuer un virement</option>\n\t\t\t<!-- <option value=\"dernieresOperations\">dernieres Operations</option> indirectement apres selection dans tableau -->\n\t\t</select> {{message}} <br/>\n\t\t\n        <div [ngSwitch]=\"action\">\n            <liste-comptes *ngSwitchCase=\"'listeComptes'\" (selectedCompteEvent)=\"onDernieresOperations($event)\"></liste-comptes>\n            <dernieres-operations *ngSwitchCase=\"'dernieresOperations'\" [numSelectedCpt]=\"numSelectedCompte\"></dernieres-operations>\n            <param-virement *ngSwitchCase=\"'paramVirement'\" (virementOk)=\"onRefreshListeCompte($event)\" ></param-virement>\n            <div *ngSwitchDefault>... unknown action ...</div>\n        </div>\n   </div>\t\t \n  ",
                        providers: [client_service_1.ClientService]
                    }), 
                    __metadata('design:paramtypes', [client_service_1.ClientService, router_1.ActivatedRoute, common_1.Location])
                ], IdentifieComponent);
                return IdentifieComponent;
            }());
            exports_1("IdentifieComponent", IdentifieComponent);
        }
    }
});
//# sourceMappingURL=identifie.component.js.map