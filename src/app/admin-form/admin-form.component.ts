import { Component, OnInit, Input } from '@angular/core';
import { Administrator } from '../../Model/administrator';


@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

	@Input() administrator: Administrator;

  	ngOnInit(): void {
	    this.administrator = new Administrator();
	}

	save(): void {
		// TODO HTTP to save administrateur
	}
}
