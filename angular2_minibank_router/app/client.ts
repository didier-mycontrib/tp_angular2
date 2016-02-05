export interface Adresse {
    idAdr : number;
	rue : string;
	codePostal: string;
	ville : string;
}

export interface Client {
    numero : number;
	prenom : string;
	nom: string;
	adresse : Adresse;
	telephone : string;
	email: string;
}