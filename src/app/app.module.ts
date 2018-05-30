import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './users/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { KeywordsComponent } from './projects/keywords/keywords.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers} from './store/app.states';
// import { metaReducers } from './store/app.states';
import { UserEffects} from './store/effects/user.effects';
import { ProjectEffects} from './store/effects/project.effects';

import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxDataGridModule} from 'devextreme-angular';
import { DxTemplateModule} from 'devextreme-angular';
import {EffectsModule} from '@ngrx/effects';

import { AuthService } from './services/auth.service';

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
      // StoreModule.forRoot(reducers, { metaReducers }),
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([ UserEffects, ProjectEffects]),
      HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
