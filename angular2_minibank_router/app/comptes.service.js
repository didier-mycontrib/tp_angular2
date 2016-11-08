System.register(['@angular/core', '@angular/http', 'rxjs/Observable', './app.config'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Observable_1, app_config_1;
    var CompteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            CompteService = (function () {
                function CompteService(_http, myAppConfig) {
                    this._http = _http;
                    this.myAppConfig = myAppConfig;
                    this._headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this._compteUrlPart = "/comptes"; // + ...'; // REST call 
                    //pour test temproraire (sans base):   
                    this.sampleComptes = [
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
                    this.mockedComptesObservable = Observable_1.Observable.of(this.sampleComptes);
                }
                CompteService.prototype.getComptesOfClientObservable = function (numCli, firstAlternativeTry, withMockedData) {
                    var _this = this;
                    if (withMockedData)
                        return this.mockedComptesObservable;
                    var comptesUrl = null;
                    if (firstAlternativeTry) {
                        comptesUrl = this.myAppConfig.api_base_url + this._compteUrlPart + "?numClient=" + numCli;
                    }
                    else {
                        comptesUrl = this.myAppConfig.alternative_api_base_url + "/comptes.json";
                    }
                    console.log("comptesUrl =  " + comptesUrl);
                    return this._http.get(comptesUrl)
                        .map(function (response) { return response.json(); })
                        .catch(function (e) {
                        if (firstAlternativeTry) {
                            console.log("first try failed with real dynamic url , second try with static app/data/...json");
                            return _this.getComptesOfClientObservable(numCli, false, false);
                        }
                        else if (_this.myAppConfig.mode == "development") {
                            console.log("second try failed - third try using mocked");
                            return _this.getComptesOfClientObservable(numCli, false, true);
                        }
                        else {
                            return Observable_1.Observable.throw('error:' + e);
                        }
                    });
                };
                CompteService.prototype.getgetComptesOfClientObservableWithAlternativeTry = function (numCli) {
                    return this.getComptesOfClientObservable(numCli, true, false);
                };
                CompteService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(app_config_1.MY_APP_CONFIG_TOKEN)), 
                    __metadata('design:paramtypes', [http_1.Http, Object])
                ], CompteService);
                return CompteService;
            }());
            exports_1("CompteService", CompteService);
        }
    }
});
//# sourceMappingURL=comptes.service.js.map