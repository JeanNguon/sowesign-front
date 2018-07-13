import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../homepage/homepage.component';
import { PageNotFoundComponent } from '../../layout/not-found/page-not-found.component';


const appRoutes: Routes = [

    {
        path: 'accueil',
        component: HomePageComponent
    },
    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },
    { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }