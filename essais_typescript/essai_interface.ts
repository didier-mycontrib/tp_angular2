interface Person {
    firstname: string;
    lastname: string;
}

function greeterPerson(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

//var user = {name: "James Bond", comment: "top secret"}; //imcompatible avec l'interface Person (erreur detectee par tsc)
var user = {firstname: "James", lastname: "Bond" , country: "UK"}; //ok : compatible avec interface Person

msg = greeterPerson(user);
console.log(msg);


class Student {
    fullname : string;
    constructor(public firstname, public lastname, public schoolClass) {
        this.fullname = firstname + " " + lastname + "[" + schoolClass + "]";
    }
}

var s1 = new Student("cancre", "Ducobu" , "Terminale"); //compatible avec interface Person

msg = greeterPerson(s1);
console.log(msg);