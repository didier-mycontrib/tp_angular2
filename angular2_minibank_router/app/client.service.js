System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
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
            }],
        execute: function() {
            ClientService = (function () {
                function ClientService(_http) {
                    this._http = _http;
                    this._clientUrl = 'app/data/client.json'; // data in static '.json" file
                }
                //private _clientUrl = '.../client/ + ...'; // REST call 
                ClientService.prototype.getClientObservable = function (numCli) {
                    return this._http.get(this._clientUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleErrorObservable);
                };
                ClientService.prototype.getClientPromise = function (numCli) {
                    // return clientPromise; //mock data in current file
                    return this._http.get(this._clientUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleErrorPromise);
                    /* .map(response => <Client> response.json());
                     .toPromise();*/
                };
                ClientService.prototype.handleErrorObservable = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw('Server error' + error);
                };
                ClientService.prototype.handleErrorPromise = function (error) {
                    console.log(error);
                    return Promise.reject('Server error' + error);
                };
                ClientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientService);
                return ClientService;
            })();
            exports_1("ClientService", ClientService);
        }
    }
});
/*
var sampleClient : Client= {"numero" : 1,
                        "nom": "Therieur",
                        "prenom": "alex",
                        "adresse" : { "idAdr" :1 ,"rue" : "123 - rue elle" , "codePostal" : "750015", "ville" : "Par ici"  },
                        "telephone" : "0102030405" ,
                        "email" : "alex.therieur@ici-ou-la-bas.fr"
                        };
                        
var clientPromise = Promise.resolve(sampleClient);
*/ 
//# sourceMappingURL=client.service.js.map