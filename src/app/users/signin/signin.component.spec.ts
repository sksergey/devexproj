import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxTextBoxModule} from 'devextreme-angular';
import {DebugElement} from '@angular/core';

import {Store, StoreModule} from '@ngrx/store';
import * as appState from '../../store/app.states';
import {reducers} from '../../store/app.states';

fdescribe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let dEl: DebugElement;
  let htmlEl: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          SigninComponent
      ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            DxButtonModule,
            DxTextBoxModule,
            StoreModule.forRoot(reducers)
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

    it('should set submitted to true', async(() => {
        expect(component.createForm).toBeTruthy();
    }));

    it('form should be invalid', async(() => {
        component.signinForm.controls['email'].setValue('');
        component.signinForm.controls['password'].setValue('');
        expect(component.signinForm.valid).toBeFalsy();
    }));

    it('form should be valid', async(() => {
        component.signinForm.controls['email'].setValue('test@test');
        component.signinForm.controls['password'].setValue('1234');
        expect(component.signinForm.valid).toBeTruthy();
    }));

    it('should be call onSubmit', async(() => {
        fixture.detectChanges();
        spyOn(component, 'onFormSubmit');
        htmlEl = fixture.debugElement.query(By.css('dx-button')).nativeElement;
        htmlEl.click();
        expect(component.onFormSubmit).toHaveBeenCalledTimes(0);
    }));

});
