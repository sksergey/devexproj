import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './users/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { KeywordsComponent } from './projects/keywords/keywords.component';

import { StoreModule } from '@ngrx/store';
import { userReducer} from './store/reducers/user.reducers';
import { projectReducer} from './store/reducers/project.reducers';
import { UserEffects} from './store/effects/user.effects';
import { ProjectEffects} from './store/effects/project.effects';

import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxDataGridModule} from 'devextreme-angular';
import { DxTemplateModule} from 'devextreme-angular';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProjectsListComponent,
    KeywordsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      DxButtonModule,
      DxTextBoxModule,
      DxDataGridModule,
      DxTemplateModule,
      StoreModule.forRoot({ userReducer, projectReducer}),
      EffectsModule.forRoot([ UserEffects, ProjectEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
