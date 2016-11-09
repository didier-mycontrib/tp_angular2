export class Compte {
    constructor(
    public numero : number,
	public label: string,
	public solde : number) {}
}

export class Operation {
    constructor(
    public numero : number,
    public label: string,
    public montant : number,
    public dateOp: string 
        )  {}
}

//demande de Virement (POST)
export class Virement {
    constructor(
    public montant : number,
    public numCptDeb: number,
    public numCptCred : number,
    public ok: boolean 
        )  {}
}

