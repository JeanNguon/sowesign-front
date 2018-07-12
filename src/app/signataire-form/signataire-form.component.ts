import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RDS } from '../../Model/rds';
import { Signataire } from '../../Model/signataire';


@Component({
  selector: 'signataire-form',
  templateUrl: './signataire-form.component.html',
  styleUrls: ['./signataire-form.component.css']
})
export class SignataireFormComponent implements OnInit {

	@Input() signataires: Signataire[];
	@Output() done = new EventEmitter<object>();

  	ngOnInit(): void {
	}

	save(): void {
		this.done.emit(this.signataires);
	}
}
