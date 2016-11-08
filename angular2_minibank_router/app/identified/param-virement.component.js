System.register(['@angular/core', '../compte.service'], function(exports_1, context_1) {
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
    var core_1, compte_service_1;
    var ParamVirementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (compte_service_1_1) {
                compte_service_1 = compte_service_1_1;
            }],
        execute: function() {
            ParamVirementComponent = (function () {
                function ParamVirementComponent(_compteService) {
                    this._compteService = _compteService;
                    this.virementOk = new core_1.EventEmitter();
                    this.transfert = { "montant": 0, "numCptDeb": 1, "numCptCred": 2, "ok": false };
                }
                ParamVirementComponent.prototype.setAndLogMessage = function (virementOk) {
                    if (virementOk) {
                        this.message = "le montant de " + this.transfert.montant +
                            " a bien ete transfere du compte " + this.transfert.numCptDeb +
                            " vers le compte " + this.transfert.numCptCred;
                    }
                    else {
                        this.message = "echec  virement";
                    }
                    console.log(this.message);
                };
                ParamVirementComponent.prototype.doVirementAndRefresh = function () {
                    var _this = this;
                    console.log("doVirementAndRefresh() : " + this.transfert.montant);
                    this._compteService.postVirementObservableWithAlternativeTry(this.transfert)
                        .subscribe(function (transfertEffectue) {
                        if (transfertEffectue.ok) {
                            _this.setAndLogMessage(true);
                            _this.virementOk.emit({ value: _this.message }); /*fire event with data*/
                        }
                        else {
                            _this.setAndLogMessage(false);
                        }
                    }, function (error) { return console.log(error); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ParamVirementComponent.prototype, "virementOk", void 0);
                ParamVirementComponent = __decorate([
                    core_1.Component({
                        selector: 'param-virement',
                        template: "\n   <div id=\"divVirement\" style=\"background-color:rgb(160,160,250); margin:3px; padding:3px;\" >\n        <h3> parametrage virement </h3> \n\t\t   <label for=\"montant\">montant :</label> <input id=\"montant\" [(ngModel)]=\"transfert.montant\"  /> <br/>\n           <label for=\"numCptDeb\">numCptDeb :</label> <input id=\"numCptDeb\" [(ngModel)]=\"transfert.numCptDeb\"  /> <br/>\n           <label for=\"numCptCred\">numCptCred :</label> <input id=\"numCptCred\" [(ngModel)]=\"transfert.numCptCred\"  /> <br/>\n\t\t  <button (click)=\"doVirementAndRefresh()\">effectuer le virement</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [compte_service_1.CompteService])
                ], ParamVirementComponent);
                return ParamVirementComponent;
            }());
            exports_1("ParamVirementComponent", ParamVirementComponent);
        }
    }
});
//# sourceMappingURL=param-virement.component.js.map