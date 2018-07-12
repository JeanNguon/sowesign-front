import { Component, ChangeDetectorRef } from '@angular/core';
import { RDS } from '../Model/rds';
import { Administrator } from '../Model/administrator';
import { Signataire } from '../Model/signataire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ref:ChangeDetectorRef) { }

  public state: number = 1;
  public rds: RDS;

  onDoneStep1(data: any) {

  	let administrator = new Administrator();
  	administrator.nom = data.administrateur.nom
  	administrator.prenom = data.administrateur.prenom
  	administrator.email = data.administrateur.email

  	let signataires = [];
  	for (let infoSignataire of data.signataires) {
  		let signataire = new Signataire(infoSignataire.identifiant);
  		signataire.email = infoSignataire.email;
  		signataire.entreprise = infoSignataire.entreprise;
  		signataire.nom = infoSignataire.nom;
  		signataire.prenom = infoSignataire.prenom;

  		signataires.push(signataire);
  	}

  	this.rds = new RDS();
	this.rds.nom = data.nom;
	this.rds.description = data.description;
	/*this.rds.date = data.;*/
	/*this.rds.heure: Date;*/
	this.rds.lieu = data.lieu;
	this.rds.urlComplementaire = data.urlComplementaire;
	this.rds.sujet = data.sujet;
	this.rds.corps = data.corps;
	this.rds.nombreRelance = data.nombreRelance;
	this.rds.periodicite = data.periodicite;
	this.rds.delaisMinimum = data.delaisMinimum;
	this.rds.entreprise = data.entreprise;
	
	this.rds.administrateur = administrator;
	this.rds.signataires = signataires;

  	this.state = 2;
  	this.ref.detectChanges();
  }

  onDoneStep2(data: object) {
  	console.log(data);
  	this.state = 3;
  	this.ref.detectChanges();
  }

  onDoneStep3(data: object) {
  	console.log(data);
  	this.state = 4;
  	this.ref.detectChanges();
  }

  onDoneStep4(data: object) {
  	console.log(data);
  	this.state = 5;
  	this.ref.detectChanges();
  }
}
 