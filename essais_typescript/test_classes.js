var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CompteEpargne = (function () {
    function CompteEpargne(numero, solde) {
        if (solde === void 0) { solde = 0; }
        this.numero = numero;
        this.solde = solde;
    }
    CompteEpargne.prototype.calculerInteret = function () {
        return this.solde * CompteEpargne.taux / 100;
    };
    CompteEpargne.taux = 1.5;
    return CompteEpargne;
})();
var compteEpargne = new CompteEpargne(1, 200.0);
console.log("interet=" + compteEpargne.calculerInteret());
var Animal = (function () {
    function Animal(theName) {
        if (theName === void 0) { theName = "default animal name"; }
        this.name = theName;
        this.size = 100; //by default
    }
    Object.defineProperty(Animal.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (newSize) {
            if (newSize >= 0)
                this._size = newSize;
            else
                console.log("negative size is invalid");
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m." + " size=" + this._size);
    };
    return Animal;
})();
var a1 = new Animal("favorite animal");
a1.size = -5; //  calling set size() → negative size is invalid (at runtime) , _size still at 100
a1.size = 120; // calling set size()
a1.move();
console.log("size=" + a1.size); // calling get size()  → affiche size=120
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
//var a = new Animal("animal");
var a = new Animal();
var sam = new Snake("Sammy the Python");
//var sam = new Snake();
var tom = new Horse("Tommy the Palomino");
a.move();
sam.move();
tom.move(34); //avec polymorphisme : Galloping... for  Horse
