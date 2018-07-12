import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Administrator } from '../../Model/administrator';
import { RDS } from '../../Model/rds';


@Component({
  selector: 'rds-form',
  templateUrl: './rds-form.component.html',
  styleUrls: ['./rds-form.component.css']
})
export class RdsFormComponent implements OnInit {

	@Input() rds: RDS;
	@Output() done = new EventEmitter<object>();

  	ngOnInit(): void {
	}

	save(): void {
		this.done.emit(this.rds);
	}
}
