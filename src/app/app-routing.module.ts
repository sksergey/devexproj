import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './users/signin/signin.component';
import { KeywordsComponent } from './projects/keywords/keywords.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { UserGuardService} from './users/user-guard.service';

const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'keywords/:id', component: KeywordsComponent, canActivate: [ UserGuardService]},
    {path: '', component: ProjectsListComponent, canActivate: [ UserGuardService]}
    // {path: '', component: ProjectsListComponent},
    // {path: 'keywords/:id', component: KeywordsComponent}
    ]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
