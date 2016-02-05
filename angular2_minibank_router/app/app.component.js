System.register(['angular2/core', 'angular2/router', './welcome.component', './identification.component', './identifie.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, welcome_component_1, identification_component_1, identifie_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (identification_component_1_1) {
                identification_component_1 = identification_component_1_1;
            },
            function (identifie_component_1_1) {
                identifie_component_1 = identifie_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t\t<header id=\"mainHeader\" role=\"banner\">\n\t\t       <h3>Minibank App </h3>\n\t\t\t</header>\n\t\t\t<div id=\"mainArea\"  >\n\t\t\t\t<section id=\"simpleMainContent\" > \n                    <router-outlet></router-outlet>\t\t\t\t\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t\t <footer id=\"mainFooter\" >\n\t\t\t... status , mentions legales , ... <a [routerLink]=\"['Welcome']\"> retour accueil </a>\n\t\t\t</footer>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: []
                    }),
                    router_1.RouteConfig([
                        //NB: path="relative_url_path" for href , name="logicalName" for indirect <a [routerLink]="LogicalName" />...</>
                        // Welcome child route as default
                        { path: '/welcomeMiniBank', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/identificationClient', name: 'Identification', component: identification_component_1.IdentificationComponent },
                        { path: '/clientItendifie/...', name: 'Identifie', component: identifie_component_1.IdentifieComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map