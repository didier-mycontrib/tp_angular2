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
    var ClientService;
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
            ClientService = (function () {
                function ClientService(_http, myAppConfig) {
                    this._http = _http;
                    this.myAppConfig = myAppConfig;
                    this._headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this._clientUrlPart = "/clients"; // + ...'; // REST call 
                    this._verifyAuthUrlPart = "/verifyAuth"; // POST REST call 
                    /*
                   private handleErrorPromise (error: any) {
                    console.log(error);
                    return Promise.reject('Server error' + error);
                 }*/
                    //pour test temproraire (sans base):   
                    this.sampleClient = { "numero": 1,
                        "nom": "Therieur_MOCK",
                        "prenom": "alex",
                        "adresse": { "idAdr": 1, "rue": "123 - rue elle", "codePostal": "750015", "ville": "Par ici" },
                        "telephone": "0102030405",
                        "email": "alex.therieur@mock.fr"
                    };
                    this.mockedClientObservable = Observable_1.Observable.of(this.sampleClient);
                }
                ClientService.prototype.getClientObservable = function (numCli, firstAlternativeTry, withMockedData) {
                    var _this = this;
                    if (withMockedData)
                        return this.mockedClientObservable;
                    var clientUrl = null;
                    if (firstAlternativeTry) {
                        clientUrl = this.myAppConfig.api_base_url + this._clientUrlPart + "/" + numCli;
                    }
                    else {
                        clientUrl = this.myAppConfig.alternative_api_base_url + "/client.json";
                    }
                    console.log("clientUrl =  " + clientUrl);
                    return this._http.get(clientUrl)
                        .map(function (response) { return response.json(); })
                        .catch(function (e) {
                        if (firstAlternativeTry) {
                            console.log("first try failed with real dynamic url , second try with static app/data/...json");
                            return _this.getClientObservable(numCli, false, false);
                        }
                        else if (_this.myAppConfig.mode == "development") {
                            console.log("second try failed - third try using mocked");
                            return _this.getClientObservable(numCli, false, true);
                        }
                        else {
                            return Observable_1.Observable.throw('error:' + e);
                        }
                    });
                };
                ClientService.prototype.getClientObservableWithAlternativeTry = function (numCli) {
                    return this.getClientObservable(numCli, true, false);
                };
                ClientService.prototype.verifyClientAuthObservable = function (clientAuth, firstAlternativeTry, withMockedAglorithm) {
                    var _this = this;
                    if (withMockedAglorithm) {
                        if (clientAuth.password == "pwd" + clientAuth.numClient) {
                            clientAuth.ok = true;
                        }
                        else {
                            clientAuth.ok = false;
                        }
                        return Observable_1.Observable.of(clientAuth);
                    }
                    var verifyAuthUrl = null;
                    if (firstAlternativeTry) {
                        verifyAuthUrl = this.myAppConfig.api_base_url + this._verifyAuthUrlPart;
                    }
                    else {
                        verifyAuthUrl = this.myAppConfig.alternative_api_base_url + this._verifyAuthUrlPart;
                    }
                    console.log("verifyAuthUrl =  " + verifyAuthUrl);
                    return this._http
                        .post(verifyAuthUrl, JSON.stringify(clientAuth), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .catch(function (e) {
                        if (firstAlternativeTry) {
                            console.log("first try failed with main url , second try with alternative url");
                            return _this.verifyClientAuthObservable(clientAuth, false, false);
                        }
                        else if (_this.myAppConfig.mode == "development") {
                            console.log("second try failed - third try with mocked algorithm");
                            return _this.verifyClientAuthObservable(clientAuth, false, true);
                        }
                        else {
                            return Observable_1.Observable.throw('error:' + e);
                        }
                    });
                };
                ClientService.prototype.verifyClientAuthObservableWithAlternativeTry = function (clientAuth) {
                    return this.verifyClientAuthObservable(clientAuth, true, false);
                };
                /*
                public getClientPromise(numCli: number) : Promise< Client > {
                  //return this.mockedClientPromise; //mock data in current file
                  return this._http.get( this.myAppConfig.api_base_url + this._clientUrlPart +"/" + numCli)
                                  .toPromise()
                                  .then(response => <Client> response.json())
                                  .catch(this.handleErrorPromise);
                    
                }*/
                ClientService.prototype.handleErrorObservable = function (error) {
                    console.log("handleErrorObservable_error:" + error);
                    return Observable_1.Observable.throw('Server error:' + error);
                };
                ClientService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(app_config_1.MY_APP_CONFIG_TOKEN)), 
                    __metadata('design:paramtypes', [http_1.Http, Object])
                ], ClientService);
                return ClientService;
            }());
            exports_1("ClientService", ClientService);
        }
    }
});
//# sourceMappingURL=client.service.js.map