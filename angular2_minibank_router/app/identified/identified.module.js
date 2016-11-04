System.register(['@angular/core', '@angular/common', '@angular/forms', './identified-routing.module', './identifie.component', './liste-comptes.component', './param-virement.component', './dernieres-operations.component', '../client.service'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, identified_routing_module_1, identifie_component_1, liste_comptes_component_1, param_virement_component_1, dernieres_operations_component_1, client_service_1;
    var IdentifiedModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (identified_routing_module_1_1) {
                identified_routing_module_1 = identified_routing_module_1_1;
            },
            function (identifie_component_1_1) {
                identifie_component_1 = identifie_component_1_1;
            },
            function (liste_comptes_component_1_1) {
                liste_comptes_component_1 = liste_comptes_component_1_1;
            },
            function (param_virement_component_1_1) {
                param_virement_component_1 = param_virement_component_1_1;
            },
            function (dernieres_operations_component_1_1) {
                dernieres_operations_component_1 = dernieres_operations_component_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            }],
        execute: function() {
            IdentifiedModule = (function () {
                function IdentifiedModule() {
                }
                IdentifiedModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, forms_1.FormsModule, identified_routing_module_1.IdentifiedRoutingModule],
                        declarations: [identifie_component_1.IdentifieComponent, liste_comptes_component_1.ListeComptesComponent, param_virement_component_1.ParamVirementComponent, dernieres_operations_component_1.DernieresOperationsComponent],
                        providers: [client_service_1.ClientService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IdentifiedModule);
                return IdentifiedModule;
            }());
            exports_1("IdentifiedModule", IdentifiedModule);
        }
    }
});
//# sourceMappingURL=identified.module.js.map