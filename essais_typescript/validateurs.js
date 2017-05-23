System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lettersRegexp, numberRegexp, LettersOnlyValidator, ZipCodeValidator;
    return {
        setters: [],
        execute: function () {
            lettersRegexp = /^[A-Za-z]+$/;
            numberRegexp = /^[0-9]+$/;
            LettersOnlyValidator = (function () {
                function LettersOnlyValidator() {
                }
                LettersOnlyValidator.prototype.isAcceptable = function (s) {
                    return lettersRegexp.test(s);
                };
                return LettersOnlyValidator;
            }());
            exports_1("LettersOnlyValidator", LettersOnlyValidator);
            ZipCodeValidator = (function () {
                function ZipCodeValidator() {
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            }());
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    };
});
//# sourceMappingURL=validateurs.js.map