function greeterPerson(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
//var user = {name: "James Bond", comment: "top secret"}; //imcompatible avec l'interface Person (erreur detectee par tsc)
var user = { firstname: "James", lastname: "Bond", country: "UK" }; //ok : compatible avec interface Person
msg = greeterPerson(user);
console.log(msg);
var Student = (function () {
    function Student(firstname, lastname, schoolClass) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.schoolClass = schoolClass;
        this.fullname = firstname + " " + lastname + "[" + schoolClass + "]";
    }
    return Student;
})();
var s1 = new Student("cancre", "Ducobu", "Terminale"); //compatible avec interface Person
msg = greeterPerson(s1);
console.log(msg);
