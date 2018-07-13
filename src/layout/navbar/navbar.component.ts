import { Component } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  public languageList: string[] = ["français", "english"];
  public selectedLanguage: string;

  ngOnInit(): void {
    this.selectedLanguage = "français";
    console.log(this.languageList);
  }
  setLanguage(language: string) {
    console.log(language);
    this.selectedLanguage = language;
  }
  redirectHomePage() {
    this.router.navigate(['/accueil']);
  }
}
