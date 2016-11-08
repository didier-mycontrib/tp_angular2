export class Adresse {
    constructor(
    public idAdr : number,
	public rue : string,
	public codePostal: string,
	public ville : string ) {}
}

export class Client {
    constructor(
    public numero : number,
	public prenom : string,
	public nom: string,
	public adresse : Adresse,
	public telephone : string,
	public email: string) {}
   
}


export class ClientAuth {
    constructor(
    public numClient : number,
    public password : string,
    public ok: boolean) {}
   
}
