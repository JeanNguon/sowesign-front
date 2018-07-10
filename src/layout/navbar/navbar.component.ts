import { Component } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public languageList:string[] = ["français","english"];
  public selectedLanguage: string;

  ngOnInit(): void {
    this.selectedLanguage = "français";
    console.log(this.languageList);
  }
  setLanguage(language:string){
    console.log(language);
    this.selectedLanguage = language;
  }
}
