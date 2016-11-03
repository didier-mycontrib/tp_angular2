"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Cercle qui va bien';
        this.c1 = {
            x: 10,
            y: 20,
            r: 50
        };
        this.onNewY = function (evt) {
            this.c1.y = evt.target.value;
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h2>{{title}}</h2>\n    <div> (x,y)=<b>({{c1.x}} ,{{c1.y}})</b> , r =<b> {{c1.r}} </b> </div>\n    <div>\n      <label>x: </label> <input [value]=\"c1.x\" placeholder=\"x\"> with [value]=\"c1.x\" attribute synchronisation <br/>\n      <label>x: </label> <input [(ngModel)]=\"c1.x\" placeholder=\"x\"> bi-directional via directive [(ngModel)]=\"c1.x\" <br/>\n      <label>y: </label> <input (input)=\"onNewY($event)\" placeholder=\"y\"> with (input)=\"onNewY($event)\" event fuction<br/>\n      <label>y: </label> <input (input)=\"c1.y = $event.target.value;\" placeholder=\"y\"> with (input)=\"c1.y = $event.target.value;\" event fuction<br/>\n      <label>r: </label> <input [(ngModel)]=\"c1.r\" placeholder=\"r\"> bi-directional via directive [(ngModel)]=\"c1.r\" <br/>\n    </div>\n    <p> l'utilisation de[(ngModel)] necessite l'importation de FormsModule dans app.module.ts </p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map