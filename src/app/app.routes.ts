import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WizardsListComponent } from './wizards-list/wizards-list.component';

export const routes: Routes = [
    {
        path: '', component: WizardsListComponent
    }
     
];
