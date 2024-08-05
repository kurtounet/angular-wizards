import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WizardsListComponent } from './wizards-list/wizards-list.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { Error404Component } from './error404/error404.component';
import { authGuard } from '../shared/auth.guard';

export const routes: Routes = [
    {
        path: '', component: WizardsListComponent,       
    },
    {
        path:'admin', component: DashboardComponent,
        
        // routes imbriquées
        children: [             
            { path: 'users', 
                //lazy loading
                //loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
                component: UserComponent},
            { path: 'roles', component: UserRolesComponent},
            { path: 'profile', component: UserprofileComponent}
        ],canActivate: [authGuard]
        
        
    },
    {path: '**', component: Error404Component}
     
];
