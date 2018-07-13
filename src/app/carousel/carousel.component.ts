import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public carouselTile : NguCarousel;
  public dateCreationReunion:Date;
  public signatureList:Signataire[] = [
    {name:'NOM1',firstname:'prenom1',entreprise:'entreprise',hasSigned:true,relanced:false},
    {name:'NOM2',firstname:'prenom2',entreprise:'entreprise',hasSigned:true,relanced:false},
    {name:'NOM1',firstname:'prenom1',entreprise:'entreprise',hasSigned:false,relanced:false},
    {name:'NOM1',firstname:'prenom1',entreprise:'entreprise',hasSigned:true,relanced:false},
    {name:'NOM2',firstname:'prenom2',entreprise:'entreprise',hasSigned:false,relanced:true},
    {name:'NOM1',firstname:'prenom1',entreprise:'entreprise',hasSigned:false,relanced:false},
    {name:'NOM2',firstname:'prenom2',entreprise:'entreprise',hasSigned:true,relanced:false},
    {name:'NOM2',firstname:'prenom2',entreprise:'entreprise',hasSigned:false,relanced:false},
    {name:'NOM3',firstname:'prenom3',entreprise:'entreprise',hasSigned:true,relanced:false}
  ];
  ngOnInit() {
    this.dateCreationReunion = new Date('June 30, 2018 16:46:00');
    this.carouselTile  = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 4,
      speed: 0,
      interval: 9000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      easing: 'ease'
    }
  }


  public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }


}

export class Signataire {
  public name:string;
  public firstname:string;
  public entreprise:string;
  public hasSigned:boolean;
  public relanced:boolean;
}
