//function type:
var myAdd = function (x, y) { return x + y; };
console.log("res=" + myAdd(5, 6));
//optional parameter:
function buildNameV1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//default parameter:
function buildNameV2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
//optional last parameters:
function buildNameV3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName1 = buildNameV1("Joseph");
var employeeName2 = buildNameV2("Joseph");
var employeeName3 = buildNameV3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("employeeName1=" + employeeName1);
console.log("employeeName2=" + employeeName2);
console.log("employeeName3=" + employeeName3);
//lambda expressions:
var myFct;
// myFct = (tab) => { var taille = tab.length; return taille; }
//myFct = (tab) => { return tab.length; }
//myFct = (tab) => tab.length; 
myFct = function (tab) { return tab.length; };
var numRes = myFct([12, 58, 69]);
console.log("numRes=" + numRes);
var myFct2;
//myFct2 = (x,y) => { return (x+y) / 2; }
myFct2 = function (x, y) { return (x + y) / 2; };
var numRes2 = myFct2(5.5, 3.3);
console.log("numRes2=" + numRes2);
function displayColor(p) {
    if (typeof p == "string") {
        console.log("c:" + p);
    }
    else if (typeof p == "object") {
        console.log("r:" + p[0] + ",g:" + p[1] + ",b=" + p[1]);
    }
    else {
        console.log("unknown color , typeof =" + (typeof p));
    }
}
displayColor([125, 250, 30]);
displayColor("red");
//# sourceMappingURL=test-fonctions.js.map