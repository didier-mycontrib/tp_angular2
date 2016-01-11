function greeter(person) {
    return "Hello, " + person;
}
var user = "Power User";
var msg = "";
//msg = greeter(123456);//123456 incompatible avec type string (erreur detectee par tsc)
msg = greeter(user);
console.log(msg);
