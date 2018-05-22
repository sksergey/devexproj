import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './users/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { KeywordsComponent } from './projects/keywords/keywords.component';

import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxDataGridModule} from 'devextreme-angular';

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
      DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
