import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SigninComponent} from './signin.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxDataGridModule, DxTemplateModule, DxTextBoxModule} from 'devextreme-angular';
import {APP_BASE_HREF, Location} from '@angular/common';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, reducers} from '../../store/app.states';
import {DebugElement} from '@angular/core';
import {ProjectsListComponent} from '../../projects/projects-list/projects-list.component';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule, routes} from '../../app-routing.module';
import {KeywordsComponent} from '../../projects/keywords/keywords.component';
import {AuthService} from '../../services/auth.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  // let componentNew: ProjectsListComponent;
  let fixture: ComponentFixture<SigninComponent>;
  // let fixtureNew: ComponentFixture<ProjectsListComponent>;
  let htmlEl: HTMLElement;
  // let resEl: HTMLElement;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          SigninComponent,
          ProjectsListComponent,
          KeywordsComponent
      ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            DxButtonModule,
            DxTextBoxModule,
            DxTemplateModule,
            DxDataGridModule,
            AppRoutingModule,
            StoreModule.forRoot(reducers),
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue : '/signin' },
            AuthService,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

      router = TestBed.get(Router);
      location = TestBed.get(Location);
      router.initialNavigation();
  });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should set submitted to true', async(() => {
    //     expect(component.onFormSubmit).toBeTruthy();
    // }));

    // it('form should be invalid(empty)', async(() => {
    //     component.signinForm.controls['email'].setValue('');
    //     component.signinForm.controls['password'].setValue('');
    //     expect(component.signinForm.valid).toBeFalsy();
    // }));
    //
    // it('form should be invalid(bool)', async(() => {
    //     component.signinForm.controls['email'].setValue(true);
    //     component.signinForm.controls['password'].setValue(false);
    //     expect(component.signinForm.valid).toBeFalsy();
    // }));
    //
    // it('form should be invalid(number)', async(() => {
    //     component.signinForm.controls['email'].setValue(1234);
    //     component.signinForm.controls['password'].setValue(1234);
    //     expect(component.signinForm.valid).toBeFalsy();
    // }));
    //
    // it('form should be invalid(null)', async(() => {
    //     component.signinForm.controls['email'].setValue(null);
    //     component.signinForm.controls['password'].setValue(null);
    //     expect(component.signinForm.valid).toBeFalsy();
    // }));
    //
    // it('form should be invalid(array)', async(() => {
    //     component.signinForm.controls['email'].setValue(['test@test']);
    //     component.signinForm.controls['password'].setValue(['1', 2, 3, 4, 6]);
    //     expect(component.signinForm.controls['password'].value).toBe('sdsd');
    // }));
    //
    // it('form should be valid', async(() => {
    //     component.signinForm.controls['email'].setValue('test@test');
    //     component.signinForm.controls['password'].setValue('1234');
    //     expect(component.signinForm.valid).toBeTruthy();
    // }));
    //
    // it('should be call onSubmit', async(() => {
    //     spyOn(component, 'onFormSubmit');
    //     component.signinForm.controls['email'].setValue('test@test');
    //     component.signinForm.controls['password'].setValue('1234');
    //     htmlEl = fixture.debugElement.query(By.css('dx-button')).nativeElement;
    //     htmlEl.click();
    //     expect(component.onFormSubmit).toHaveBeenCalledTimes(1);
    // }));

    it('should be signin and show projects', async(() => {
        // spyOn(component, 'onFormSubmit');
        // component.signinForm.controls['email'].setValue('test@test');
        // component.signinForm.controls['password'].setValue('1234');
        // htmlEl = fixture.debugElement.query(By.css('dx-button')).nativeElement;
        // htmlEl.click();

        expect(router.url).toBe('ac');

        //
        // tick(2000);
        //
        // fixture.detectChanges();
        // let url = '/keywords/2';
        // let res = router.navigateByUrl(url);
        //
        // // expect(location.path()).toBe('/');
        // expect(res).toBeTruthy();
        // resEl = fixtureNew.debugElement.query(By.css('h3')).nativeElement;
        // expect(resEl.innerText).toBe('Project');

        // ---------------------------------------------------------
        // fixtureNew = TestBed.createComponent(ProjectsListComponent);
        // componentNew = fixtureNew.componentInstance;
        // fixtureNew.detectChanges();
        // resEl = fixture.debugElement.query(By.css('h3')).nativeElement;
        // expect(resEl.innerText).toBe('Projects');
    }));

    // it('Entering value in input controls and emit output events', () => {
    //     component.signinForm.controls['email'].setValue('test@test');
    //     component.signinForm.controls['password'].setValue('1234');
    //     htmlEl = fixture.debugElement.query(By.css('dx-button')).nativeElement;
    //     htmlEl.click();
    //
    //     resEl = fixture.debugElement.query(By.css('h2')).nativeElement;
    //     // expect(component.user.email).toBe('test@test');
    //     // expect(component.user.password).toBe('1234');
    //     expect(resEl).toContain('Projects');
    // });

    // it('try signin', () => {
    //     let email = 'test@test';
    //     let password = '1234';
    //     let isLogIn;
    //     component.signinForm.controls['email'].setValue(email);
    //     component.signinForm.controls['password'].setValue(password);
    //     htmlEl = fixture.debugElement.query(By.css('dx-button')).nativeElement;
    //     htmlEl.click();
    //
    //     store.dispatch(new SigninUser(component.user));
    //     store.select(appState.getIsLoggedIn).subscribe(val => isLogIn = val);
    //
    //     expect(isLogIn).toBeTruthy();
    // });
});
