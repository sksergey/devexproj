import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store} from '@ngrx/store';

import * as appState from '../../store/app.states';
import {SelectProject, ShowAllProjects} from '../../store/actions/project.actions';
import { ProjectsService} from '../projects.service';
import {Observable, Subscription} from 'rxjs';
import {Project} from '../models/project';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  project_list: Project[];
  subscription: Subscription;

  constructor(private router: Router, private store: Store<appState.AppState>) {
    this.store.dispatch(new ShowAllProjects());
    this.subscription = this.store.select(appState.getProjects).subscribe(val => this.project_list = val);
    }

  onRowClick (e) {
    console.log('e:', e);
    this.store.dispatch(new SelectProject(e.data.id));

    // let url = 'keywords/';
    // url += e.data.id.toString();
    // console.log(url);
    // this.router.navigate([url]);
  }
  ngOnInit() {}

  ngOnDestroy() {
    if (typeof this.subscription !== 'undefined') {
        this.subscription.unsubscribe();
    }
  }

}