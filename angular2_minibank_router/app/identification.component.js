System.register(['@angular/core', '@angular/router', './client.service'], function(exports_1, context_1) {
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
    var core_1, router_1, client_service_1;
    var IdentificationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            }],
        execute: function() {
            IdentificationComponent = (function () {
                function IdentificationComponent(_router, _clientService) {
                    this._router = _router;
                    this._clientService = _clientService;
                    this.title = "identification client minibank";
                    this.resVerifPwd = false;
                }
                IdentificationComponent.prototype.onVerifPassword = function () {
                    var _this = this;
                    var clientAuth = {
                        "numClient": this.numClient,
                        "password": this.password,
                        "ok": null };
                    this._clientService.verifyClientAuthObservableWithAlternativeTry(clientAuth)
                        .subscribe(function (verifiedClientAuth) {
                        if (verifiedClientAuth.ok) {
                            _this.resVerifPwd = true;
                            console.log("verifyAuth ok");
                        }
                        else {
                            _this.resVerifPwd = false;
                            console.log("verifyAuth failed");
                        }
                    }, function (error) { return console.log(error); });
                };
                IdentificationComponent.prototype.onNavigate = function () {
                    var link = ['/clientItendifie', this.numClient];
                    this._router.navigate(link);
                    //this._router.navigateByUrl(`/clientItendifie/${this.numClient}`); //avec  quote inverse `...` !!!
                };
                IdentificationComponent = __decorate([
                    core_1.Component({
                        template: "\n   <div >\n        <h3> {{title}} </h3> \n\t\t   numClient:<input type=\"text\" [(ngModel)]=\"numClient\"/> <i>(ex: 1)</i> <br/>\n\t\t   password:<input type=\"text\" [(ngModel)]=\"password\"/> <i>(ex: pwd1)</i><br/>\n          <button (click)=\"onVerifPassword()\"  > verif. password </button> <br/>\n          <button (click)=\"onNavigate()\" [hidden]=\"!resVerifPwd\" > vers espace client identifie </button> <br/>\n          <!-- <a routerLink=\"????\" [hidden]=\"!resVerifPwd\" > vers espace client identifie . </a> <br/> --> \n\t\t </div>  \n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, client_service_1.ClientService])
                ], IdentificationComponent);
                return IdentificationComponent;
            }());
            exports_1("IdentificationComponent", IdentificationComponent);
        }
    }
});
//# sourceMappingURL=identification.component.js.map