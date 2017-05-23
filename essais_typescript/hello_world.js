function greeterString(person) {
    return "Hello, " + person;
}
var userName = "Power User";
//i=0; //manque var (erreur detectee par tsc)
var msg = "";
//msg = greeter(123456);//123456 incompatible avec type string (erreur detectee par tsc)
msg = greeterString(userName);
console.log(msg);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // start at 0 by default
// enum Color {Red = 1, Green, Blue}; 
var c = Color.Green;
var colorName = Color[1]; // "Green" if "Red" is at [0]
console.log("c=" + c + " , colorName=" + colorName);
//# sourceMappingURL=hello_world.js.map