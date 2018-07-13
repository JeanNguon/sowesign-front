import { Component } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { NguCarousel } from '@ngu/carousel';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public nbrParticipantHaveSigned: number;
  public nbrParticipantTotal: number;
  public PercentOfParticipantHaveSigned: string;
  public dateEcheance: Date ;
  public timer: any;
  public signatureList:Signataire[] = [
    {name:'nom',firstname:'prenom',entreprise:'entreprise'}
  ];
  ngOnInit(): void{
    this.nbrParticipantHaveSigned = 5;
    this.nbrParticipantTotal = 20;
    let temp = (this.nbrParticipantHaveSigned/this.nbrParticipantTotal)*100;
    this.PercentOfParticipantHaveSigned = temp+"%";
    this.dateEcheance = new Date('July 21, 2018 16:46:00');
    let now = new Date(Date.now());
    this.timer = this.dateDiff(now,this.dateEcheance);
  }
  public dateDiff(date1, date2):any{
    let tmp = date2 - date1;
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    let sec = tmp % 60;                    // Extraction du nombre de secondes
    tmp = Math.floor((tmp-sec)/60);    // Nombre de minutes (partie entière)
    let min = tmp % 60;                    // Extraction du nombre de minutes
    tmp = Math.floor((tmp-min)/60);    // Nombre d'heures (entières)
    let hour = tmp % 24;                   // Extraction du nombre d'heures
    tmp = Math.floor((tmp-hour)/24);   // Nombre de jours restants
    let day = tmp;
    let diff = [sec,min,hour,day];
    console.log(diff);
    return diff;
  }
}

export class Signataire {
  public name:string;
  public firstname:string;
  public entreprise:string;
}
