function greeterString(person : string) {
    return "Hello, " + person;
}

var userName = "Power User";

//i=0; //manque var (erreur detectee par tsc)

var msg = "";
//msg = greeter(123456);//123456 incompatible avec type string (erreur detectee par tsc)
msg = greeterString(userName);

console.log(msg);

enum Color {Red, Green, Blue}; // start at 0 by default
// enum Color {Red = 1, Green, Blue}; 

var c: Color = Color.Green;
var colorName: string = Color[1]; // "Green" if "Red" is at [0]


console.log("c=" + c + " , colorName=" + colorName);