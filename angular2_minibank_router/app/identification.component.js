System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var IdentificationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            IdentificationComponent = (function () {
                function IdentificationComponent(_router) {
                    this._router = _router;
                    this.title = "identification client minibank";
                }
                IdentificationComponent = __decorate([
                    core_1.Component({
                        template: "\n   <div >\n        <h3> {{title}} </h3> \n\t\t   numClient:<input type=\"text\" [(ngModel)]=\"numClient\"/> <i>(ex: 1)</i> <br/>\n\t\t   password:<input type=\"text\" [(ngModel)]=\"password\"/> <i>(ex: pwd1)</i><br/>\n\t\t   <a [routerLink]=\"['Identifie',  { clientId: numClient }]\" [hidden]=\"password != 'pwd'+numClient\" > vers espace client identifie . </a> <br/>\n          <!-- <a (click)=\"onNavigate()\" [hidden]=\"password != 'pwd'+numClient\" > vers espace client identifie </a> <br/> -->\n\t\t </div>  \n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], IdentificationComponent);
                return IdentificationComponent;
            })();
            exports_1("IdentificationComponent", IdentificationComponent);
        }
    }
});
//# sourceMappingURL=identification.component.js.map