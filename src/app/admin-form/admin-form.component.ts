import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Administrator } from '../../Model/administrator';


@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

	@Input() administrator: Administrator;
	@Output() done = new EventEmitter<object>();

  	ngOnInit(): void {
	}

	save(): void {
		this.done.emit(this.administrator);
	}
}
