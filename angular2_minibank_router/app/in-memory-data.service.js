System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InMemoryDataService;
    return {
        setters:[],
        execute: function() {
            InMemoryDataService = (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    var comptes = [
                        { "numero": 1,
                            "label": "COMPTE 1 (courant)",
                            "solde": 1600.0
                        },
                        { "numero": 2,
                            "label": "COMPTE 2 (LDD)",
                            "solde": 320.0
                        },
                        { "numero": 3,
                            "label": "COMPTE 3 (PEL)",
                            "solde": 650.0
                        }];
                    var operations = [
                        { "numero": 1,
                            "label": "ACHAT xy",
                            "montant": -50,
                            "dateOp": "2015-01-20"
                        },
                        { "numero": 2,
                            "label": "ACHAT zz",
                            "montant": -90,
                            "dateOp": "2015-02-08"
                        },
                        { "numero": 3,
                            "label": "SALAIRE",
                            "montant": 2000,
                            "dateOp": "2015-03-18"
                        }];
                    return { "mock-comptes": comptes,
                        "mock-operations": operations };
                };
                return InMemoryDataService;
            }());
            exports_1("InMemoryDataService", InMemoryDataService);
        }
    }
});
//# sourceMappingURL=in-memory-data.service.js.map