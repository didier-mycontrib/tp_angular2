var validateurs = require('./validateurs');
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new validateurs.ZipCodeValidator();
validators['Letters only'] = new validateurs.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
