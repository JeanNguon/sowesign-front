import { Component, OnInit, Input } from '@angular/core';
import { RDS } from '../../Model/rds';
import { Signataire } from '../../Model/signataire';


@Component({
  selector: 'signataire-form',
  templateUrl: './signataire-form.component.html',
  styleUrls: ['./signataire-form.component.css']
})
export class SignataireFormComponent implements OnInit {

	@Input() signataires: Signataire[];

  	ngOnInit(): void {
	    this.signataires = [
	    	new Signataire("001"),
	    	new Signataire("002"),
	    	new Signataire("003"),
	    ];
	}

	save(): void {
		// TODO HTTP to save administrateur
	}
}
