import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store} from '@ngrx/store';

import * as appState from '../../store/app.states';
import { SelectProject} from '../../store/actions/project.actions';
import { ProjectsService} from '../projects.service';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
    project_list: Project[];
  // constructor(public projectsService: ProjectsService, private router: Router) {  }
  constructor(private router: Router, private store: Store<appState.AppState>) {
    // this.store.select(appState.getProjects).pipe(
    //     map( val => this.project_list = val)
    // );

    let tmp = this.store.select(appState.getProjects).subscribe(val => this.project_list = val);
    tmp.unsubscribe();
  }
  onRowClick (e) {
    console.log('e:', e);
    this.store.dispatch(new SelectProject(e.data.id));

    // let url = 'keywords/';
    // url += e.data.id.toString();
    // console.log(url);
    // this.router.navigate([url]);
  }
  ngOnInit() {

  }
}
