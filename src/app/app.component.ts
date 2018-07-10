import { Component } from '@angular/core';
import { ExtracteurTagPdfService } from '../Service/extracteurTagPdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private extraceur: ExtracteurTagPdfService;

	constructor() {
		this.extraceur = new ExtracteurTagPdfService();

		this.extraceur.test();
	}



  	title = 'app';
}
