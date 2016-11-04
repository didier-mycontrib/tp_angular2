System.register(['@angular/core', '@angular/router', '@angular/common', '../client', '../client.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, common_1, client_1, client_service_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            }],
        execute: function() {
            /*
            import {ListeComptesComponent} from './pourClientIdentifie/listeComptes.component';
            import {ParamVirementComponent} from './pourClientIdentifie/paramVirement.component';
            import {DernieresOperationsComponent} from './pourClientIdentifie/dernieresOperations.component';
            */
            IdentifieComponent = (function () {
                function IdentifieComponent(_router, 
                    /*private _clientService : ClientService,*/
                    route, location) {
                    this._router = _router;
                    this.route = route;
                    this.location = location;
                    this.action = "listeComptes"; //par defaut
                    this.message = "...";
                    this.clientId = 0;
                }
                /*
               constructor(private _clientService : ClientService,
                           private _router: Router,
                           routeParams: RouteParams){
                           this.clientId = Number(routeParams.get('clientId'));
               }*/
                IdentifieComponent.prototype.fetchClient = function () {
                    /*this._clientService.getClientPromise(this.clientId)
                       .then(cli =>this.client = cli,
                             error =>  this.message = (<any>error).toString()); */
                    /* Promise.then() is good , Observable.subscribe() is better */
                    /*
                    this._clientService.getClientObservable(this.clientId)
                         .subscribe(cli =>this.client = cli ,
                                    error =>  this.message = <any>error);
                      */
                    var adr = new client_1.Adresse(1, "1 rue elle", "75000", "Paris");
                    this.client = new client_1.Client(this.clientId, "alex", "therieur", adr, "0102030405", "alex@ici.fr");
                };
                IdentifieComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        //let id = +params['clientId'];
                        _this.clientId = Number(params['clientId']);
                    });
                    this.fetchClient();
                };
                IdentifieComponent.prototype.goBack = function () {
                    this.location.back();
                };
                IdentifieComponent.prototype.onSelect = function (evt) {
                    this.action = evt.target.value; //"listeComptes" ou "paramVirement" ou ""
                    //let link = [action];
                    //this._router.navigate( link  );//{ relativeTo: this.route } existe en temps que 2eme parametre de navigate()
                    //this._router.navigateByUrl(`listeComptes`); //avec  quote inverse `...` !!!
                };
                IdentifieComponent = __decorate([
                    core_1.Component({
                        template: "\n   <div >\n        <h3>  client identifie : {{clientId}}</h3> \n\t\t<div *ngIf=\"client\" >\n\t\t\t{{client.prenom}} {{client.nom}} <br/>\n\t\t\tadresse: {{client.adresse.rue}} {{client.adresse.codePostal}} {{client.adresse.ville}} <br/>\n\t\t\ttelephone: {{client.telephone}} <br/>\n\t\t\temail: {{client.email}}\n\t\t</div>\n        <hr/>\n        <button (click)=\"goBack()\">Retour</button>\n\t\t<hr/>\n\t\t\n\t\t\n\t\taction: <select [(ngModel)]=\"action\" (change)=\"onSelect($event)\" >\n\t\t    <option value=\"listeComptes\"> liste des comptes </option>\n\t\t    <option value=\"paramVirement\">effectuer un virement</option>\n\t\t\t<!-- <option value=\"dernieresOperations\">dernieres Operations</option> indirectement apres selection dans tableau -->\n\t\t</select> {{action}} -- \n\t\t{{message}} <br/>\n\t\t<router-outlet name=\"identifiedOutlet\"></router-outlet>\n        <div [ngSwitch]=\"action\">\n            <div *ngSwitchCase=\"'listeComptes'\">listeComptes<liste-comptes></liste-comptes></div>\n            <div *ngSwitchCase=\"'dernieresOperations'\"><dernieres-operations></dernieres-operations></div>\n            <div *ngSwitchCase=\"'paramVirement'\"><param-virement></param-virement></div>\n             <div *ngSwitchDefault>... unknown action ...</div>\n        </div>\n   </div>\t\t \n  ",
                        providers: [client_service_1.ClientService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.ActivatedRoute, common_1.Location])
                ], IdentifieComponent);
                return IdentifieComponent;
            }());
            exports_1("IdentifieComponent", IdentifieComponent);
        }
    }
});
//# sourceMappingURL=identifie.component.js.map