import { Administrator } from './administrator';
import { Signataire } from './signataire';


export class RDS {
	pdf: string;
	nombreSignature: number;
	nom: string;
	description: string;
	date: Date;
	heure: Date;
	lieu: string;
	urlComplementaire: string;
	sujet: string;
	corps: string;
	nombreRelance: number;
	periodicite: number;
	delaisMinimum: number;
	entreprise: string;
	urlAvancemenet: string;
	urlTelechargement: string;
	pdfFinal: string;
	dateLimite: Date;
	administrateur: Administrator;
	signataires: Signataire[];
};