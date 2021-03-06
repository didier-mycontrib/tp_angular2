class Compte{
	numero : number;
	label: string;
	solde : number;

	constructor(numero:number=0, libelle:string="?", soldeInitial:number=0.0){
		this.numero = numero;
		this.label = libelle;
		this.solde = soldeInitial;
	}



	debiter(montant : number) : void {
		this.solde -= montant; // this.solde = this.solde - montant;
	}

	crediter(montant : number) : void {
		this.solde += montant; // this.solde = this.solde + montant;
	}
}

var c1 = new Compte(1,"compte 1",100.0);
var c2 = new Compte(2,"compte 2");
var c3 = new Compte(3);
var c4 = new Compte();

c1.crediter(50.0);
console.log("numero et label de c1: " + c1.numero + " " + c1.label);
console.log("solde de c1: " + c1.solde);


class CompteEpargne {
	static taux : number = 1.5;
	constructor(public numero : number , public solde :number = 0 ){
	}
	calculerInteret(){
	  return this.solde * CompteEpargne.taux / 100 ;
    }
}

var compteEpargne = new CompteEpargne(1,200.0);
console.log("interet=" + compteEpargne.calculerInteret());

class Animal {
    private _size : number;
    name:string;
    constructor(theName: string = "default animal name") {
	   this.name = theName;
	   this.size = 100; //by default
	}
	public get size() : number{
		return this._size;
	}
	public set size(newSize : number){
	    if(newSize >=0)
		   this._size = newSize;
		else console.log("negative size is invalid");
	}
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m." + " size=" + this._size);
    }
}

var a1 = new Animal("favorite animal");
a1.size=-5; //  calling set size() → negative size is invalid (at runtime) , _size still at 100
a1.size = 120;// calling set size()
a1.move();
console.log("size=" + a1.size) ; // calling get size()  → affiche size=120

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 45) {
        console.log("Galloping...");
        super.move(meters);
    }
}

//var a = new Animal("animal");
var a = new Animal();
var sam = new Snake("Sammy the Python");
//var sam = new Snake();

var tom: Animal = new Horse("Tommy the Palomino");

a.move();
sam.move();

tom.move(34); //avec polymorphisme : Galloping... for  Horse
