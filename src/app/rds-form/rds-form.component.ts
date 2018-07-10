import { Component, OnInit, Input } from '@angular/core';
import { Administrator } from '../../Model/administrator';
import { RDS } from '../../Model/rds';


@Component({
  selector: 'rds-form',
  templateUrl: './rds-form.component.html',
  styleUrls: ['./rds-form.component.css']
})
export class RdsFormComponent implements OnInit {

	@Input() rds: RDS;

  	ngOnInit(): void {
	    this.rds = new RDS();
	}

	save(): void {
		// TODO HTTP to save administrateur
	}
}
