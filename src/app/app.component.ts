import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ref:ChangeDetectorRef) { }

  private state: number = 1;

  onDone(data: object) {
  	console.log(data);
  	this.state = 2;
  	this.ref.detectChanges();
  }
}
 