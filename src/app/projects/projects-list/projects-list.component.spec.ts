import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListComponent } from './projects-list.component';
import {DxButtonModule, DxDataGridModule, DxTextBoxModule} from 'devextreme-angular';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserModule, By} from '@angular/platform-browser';
import {reducers} from '../../store/app.states';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProjectEffects} from '../../store/effects/project.effects';
import {UserEffects} from '../../store/effects/user.effects';
import {SigninComponent} from '../../users/signin/signin.component';
import {KeywordsComponent} from '../keywords/keywords.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {forEach} from '@angular/router/src/utils/collection';


describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ProjectsListComponent,
          // SigninComponent,
          KeywordsComponent
      ],
        imports: [
            FormsModule,
            ReactiveFormsModule,
            DxButtonModule,
            DxTextBoxModule,
            BrowserModule,
            DxDataGridModule,
            AppRoutingModule,
            StoreModule.forRoot(reducers),
            EffectsModule.forRoot([ UserEffects, ProjectEffects]),
        ],
        // providers: [
        //     { provide: APP_BASE_HREF, useValue : '/' },
        //     AuthService,
        // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //       expect(component).toBeTruthy();
  //   });
  //
  //   it('should get onrowclick', async(() => {
  //       expect(component.onRowClick).toBeTruthy();
  //   }));

    // it('should be call onRowClick', async(() => {
    //     fixture.detectChanges();
    //     spyOn(component, 'onRowClick');
    //     expect(component.onRowClick).toHaveBeenCalledTimes(1);
    // }));
});

