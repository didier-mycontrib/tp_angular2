module Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}


// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});

//si répartition en plusieurs fichiers:

/// <reference path="validateurs.ts" /> 
//simple commentaire (les fichiers "appels_module_1_2" ; "module1.js , module2.js , ...)
//doivent etre compiles en un seul  via 
//      tsc --out all_in_one.js appels_module_1_2.ts module1.ts module2.ts
//ou bien (dans page web)
//<script src="validateurs.js" type="text/javascript" />
//<script src="module2.js" type="text/javascript" />
//...
