System.register(["./validateurs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var validateurs, strings, validators;
    return {
        setters: [
            function (validateurs_1) {
                validateurs = validateurs_1;
            }
        ],
        execute: function () {
            // Some samples to try
            strings = ['Hello', '98052', '101'];
            // Validators to use
            validators = {};
            validators['ZIP code'] = new validateurs.ZipCodeValidator();
            validators['Letters only'] = new validateurs.LettersOnlyValidator();
            // Show whether each string passed each validator
            strings.forEach(function (s) {
                for (var name in validators) {
                    console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
                }
            });
        }
    };
});
//# sourceMappingURL=test-validateurs.js.map