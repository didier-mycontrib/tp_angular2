System.register(['angular2/core', 'angular2/router', './client.service', './pourClientIdentifie/listeComptes.component', './pourClientIdentifie/paramVirement.component', './pourClientIdentifie/dernieresOperations.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, client_service_1, listeComptes_component_1, paramVirement_component_1, dernieresOperations_component_1;
    var IdentifieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            },
            function (listeComptes_component_1_1) {
                listeComptes_component_1 = listeComptes_component_1_1;
            },
            function (paramVirement_component_1_1) {
                paramVirement_component_1 = paramVirement_component_1_1;
            },
            function (dernieresOperations_component_1_1) {
                dernieresOperations_component_1 = dernieresOperations_component_1_1;
            }],
        execute: function() {
            IdentifieComponent = (function () {
                function IdentifieComponent(_clientService, _router, routeParams) {
                    this._clientService = _clientService;
                    this._router = _router;
                    this.message = "...";
                    this.clientId = 0;
                    this.clientId = Number(routeParams.get('clientId'));
                }
                IdentifieComponent.prototype.fetchClient = function () {
                    var _this = this;
                    /*this._clientService.getClientPromise(this.clientId)
                       .then(cli =>this.client = cli,
                             error =>  this.message = (<any>error).toString()); */
                    /* Promise.then() is good , Observable.subscribe() is better */
                    this._clientService.getClientObservable(this.clientId)
                        .subscribe(function (cli) { return _this.client = cli; }, function (error) { return _this.message = error; });
                };
                IdentifieComponent.prototype.ngOnInit = function () {
                    this.fetchClient();
                };
                IdentifieComponent = __decorate([
                    core_1.Component({
                        template: "\n   <div >\n        <h3>  client identifie : {{clientId}}</h3> \n\t\t<div *ngIf=\"client\" >\n\t\t\t{{client.prenom}} {{client.nom}} <br/>\n\t\t\tadresse: {{client.adresse.rue}} {{client.adresse.codePostal}} {{client.adresse.ville}} <br/>\n\t\t\ttelephone: {{client.telephone}} <br/>\n\t\t\temail: {{client.email}}\n\t\t</div>\n\t\t<hr/>\n\t\t\n\t\t\n\t\taction: <select>\n\t\t    <option value=\"listeComptes\"> liste des comptes </option>\n\t\t    <option value=\"paramVirement\">effectuer un virement</option>\n\t\t\t<!-- <option value=\"dernieresOperations\">dernieres Operations</option> indirectement apres selection dans tableau -->\n\t\t</select>\n\t\t{{message}} <br/>\n\t\t <router-outlet></router-outlet>\t\n   </div>\t\t \n  ",
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [client_service_1.ClientService]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'ListeComptes', component: listeComptes_component_1.ListeComptesComponent, useAsDefault: true },
                        { path: '/virement', name: 'ParamVirement', component: paramVirement_component_1.ParamVirementComponent },
                        { path: '/operations/:numSelectedCpt', name: 'DernieresOperations', component: dernieresOperations_component_1.DernieresOperationsComponent }
                    ]), 
                    __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router, router_1.RouteParams])
                ], IdentifieComponent);
                return IdentifieComponent;
            })();
            exports_1("IdentifieComponent", IdentifieComponent);
        }
    }
});
//# sourceMappingURL=identifie.component.js.map