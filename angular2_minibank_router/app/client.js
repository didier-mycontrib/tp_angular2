System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Adresse, Client, ClientAuth;
    return {
        setters:[],
        execute: function() {
            Adresse = (function () {
                function Adresse(idAdr, rue, codePostal, ville) {
                    this.idAdr = idAdr;
                    this.rue = rue;
                    this.codePostal = codePostal;
                    this.ville = ville;
                }
                return Adresse;
            }());
            exports_1("Adresse", Adresse);
            Client = (function () {
                function Client(numero, prenom, nom, adresse, telephone, email) {
                    this.numero = numero;
                    this.prenom = prenom;
                    this.nom = nom;
                    this.adresse = adresse;
                    this.telephone = telephone;
                    this.email = email;
                }
                return Client;
            }());
            exports_1("Client", Client);
            ClientAuth = (function () {
                function ClientAuth(numClient, password, ok) {
                    this.numClient = numClient;
                    this.password = password;
                    this.ok = ok;
                }
                return ClientAuth;
            }());
            exports_1("ClientAuth", ClientAuth);
        }
    }
});
//# sourceMappingURL=client.js.map