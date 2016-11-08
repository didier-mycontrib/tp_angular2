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
                    this._compteUrlPart = "/comptes"; // + ?numClient=...'; // REST call 
                    //-------------
                    this._operationUrlPart = "/operations"; // + ?numCpt=...'; // REST call 
                    //---------
                    this._virementUrlPart = "/virement"; // POST REST call 
                    //pour test temproraire (sans base):   
                    this.sampleComptes = [
                        {
                            "numero": 1,
                            "label": "compte 1 (courant , mock)",
                            "solde": 600.0
                        },
                        {
                            "numero": 2,
                            "label": "compte 2 (LDD , mock)",
                            "solde": 3200.0
                        },
                        {
                            "numero": 3,
                            "label": "compte 3 (PEL , mock)",
                            "solde": 6500.0
                        }
                    ];
                    this.sampleOperations = [
                        {
                            "numero": 1,
                            "label": "achat xy , mock",
                            "montant": -50,
                            "dateOp": "2015-01-20"
                        },
                        {
                            "numero": 2,
                            "label": "achat zz, mock ",
                            "montant": -90,
                            "dateOp": "2015-02-08"
                        },
                        {
                            "numero": 3,
                            "label": "salaire , mock",
                            "montant": 2000,
                            "dateOp": "2015-03-18"
                        }
                    ];
                    this.mockedComptesObservable = Observable_1.Observable.of(this.sampleComptes);
                    this.mockedOperationsObservable = Observable_1.Observable.of(this.sampleOperations);
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
                CompteService.prototype.getComptesOfClientObservableWithAlternativeTry = function (numCli) {
                    return this.getComptesOfClientObservable(numCli, true, false);
                };
                CompteService.prototype.getOperationsOfCompteObservable = function (numCpt, firstAlternativeTry, withMockedData) {
                    var _this = this;
                    if (withMockedData)
                        return this.mockedOperationsObservable;
                    var operationsUrl = null;
                    if (firstAlternativeTry) {
                        operationsUrl = this.myAppConfig.api_base_url + this._operationUrlPart + "?numCpt=" + numCpt;
                    }
                    else {
                        operationsUrl = this.myAppConfig.alternative_api_base_url + "/operations.json";
                    }
                    console.log("operationsUrl =  " + operationsUrl);
                    return this._http.get(operationsUrl)
                        .map(function (response) { return response.json(); })
                        .catch(function (e) {
                        if (firstAlternativeTry) {
                            console.log("first try failed with real dynamic url , second try with static app/data/...json");
                            return _this.getOperationsOfCompteObservable(numCpt, false, false);
                        }
                        else if (_this.myAppConfig.mode == "development") {
                            console.log("second try failed - third try using mocked");
                            return _this.getOperationsOfCompteObservable(numCpt, false, true);
                        }
                        else {
                            return Observable_1.Observable.throw('error:' + e);
                        }
                    });
                };
                CompteService.prototype.getOperationsOfCompteObservableWithAlternativeTry = function (numCpt) {
                    return this.getOperationsOfCompteObservable(numCpt, true, false);
                };
                CompteService.prototype.postVirementObservable = function (virement, firstAlternativeTry, withMockedAglorithm) {
                    var _this = this;
                    if (withMockedAglorithm) {
                        virement.ok = false; // (without WS REST)
                        return Observable_1.Observable.of(virement);
                    }
                    var virementUrl = null;
                    if (firstAlternativeTry) {
                        virementUrl = this.myAppConfig.api_base_url + this._virementUrlPart;
                    }
                    else {
                        virementUrl = this.myAppConfig.alternative_api_base_url + this._virementUrlPart;
                    }
                    console.log("virementUrl =  " + virementUrl);
                    return this._http
                        .post(virementUrl, JSON.stringify(virement), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .catch(function (e) {
                        if (firstAlternativeTry) {
                            console.log("first try failed with main url , second try with alternative url");
                            return _this.postVirementObservable(virement, false, false);
                        }
                        else if (_this.myAppConfig.mode == "development") {
                            console.log("second try failed - third try with mocked algorithm");
                            return _this.postVirementObservable(virement, false, true);
                        }
                        else {
                            return Observable_1.Observable.throw('error:' + e);
                        }
                    });
                };
                CompteService.prototype.postVirementObservableWithAlternativeTry = function (virement) {
                    return this.postVirementObservable(virement, true, false);
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
//# sourceMappingURL=compte.service.js.map