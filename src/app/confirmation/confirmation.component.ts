import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { RDS } from '../../Model/rds';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
	
	@Input() rds: RDS;
	private urlAvancement: string;
	private urlTelechargement: string;

	constructor(private http: HttpClient, private ref:ChangeDetectorRef) { }

	ngOnInit(): void {
		this.http.post('http://localhost:1337/rds/create', this.rds, { responseType: 'json' })
        .subscribe(data => {
        	let infoRds = JSON.parse(JSON.stringify(data));
            this.urlAvancement = infoRds.urlAvancement;
            this.urlTelechargement = infoRds.urlTelechargement;

            this.ref.detectChanges();
        });
	}
}
