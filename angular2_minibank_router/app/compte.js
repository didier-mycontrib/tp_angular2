System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Compte, Operation, Virement;
    return {
        setters:[],
        execute: function() {
            Compte = (function () {
                function Compte(numero, label, solde) {
                    this.numero = numero;
                    this.label = label;
                    this.solde = solde;
                }
                return Compte;
            }());
            exports_1("Compte", Compte);
            Operation = (function () {
                function Operation(numero, label, montant, dateOp) {
                    this.numero = numero;
                    this.label = label;
                    this.montant = montant;
                    this.dateOp = dateOp;
                }
                return Operation;
            }());
            exports_1("Operation", Operation);
            //demande de Virement (POST)
            Virement = (function () {
                function Virement(montant, numCptDeb, numCptCred, ok) {
                    this.montant = montant;
                    this.numCptDeb = numCptDeb;
                    this.numCptCred = numCptCred;
                    this.ok = ok;
                }
                return Virement;
            }());
            exports_1("Virement", Virement);
        }
    }
});
//# sourceMappingURL=compte.js.map