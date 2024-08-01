import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CallApiService } from '../../shared/call-api.service';
import { Icharacters } from '../../shared/characters.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizards-list.component.html',
  styleUrl: './wizards-list.component.css'
})
export class WizardsListComponent{

 // charactersCollection$ = inject(CallApiService).getAllCharacters();
  
  charactersCollection:Icharacters[] = [];
  dataService = inject(CallApiService);
  messageError: string = '';
  /* Si getAllCharacters():Observable<Icharacters[]> dans le service*/
  apiData:Subscription = new Subscription();
  ngOnInit(): void {
    this.getAllCharacters();
  }
  ngOnDestroy(): void {
    this.apiData.unsubscribe();
  }

  getAllCharacters() {
    this.apiData =this.dataService.getAllCharacters().subscribe({
      next: (data: Icharacters[]) => {
        this.charactersCollection = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des characters:', err);
      }
    // this.charactersCollection = data.slice(0,30); 
    // console.log(this.charactersCollection);      
    });
  }


}
