export class Signataire {
	id: number;
	nom: string;
	prenom: string;
	entreprise: string;
	email: string;
	urlSignature: string;
	identifiant: string;

	constructor(identifiant) {
		this.identifiant = identifiant;
	}
}