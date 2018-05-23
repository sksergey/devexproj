import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService} from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  constructor(public projectsService: ProjectsService, private router: Router) { }
  onRowClick (e) {
    let url = 'keywords/';
    url += e.data.id.toString();
    console.log(url);
    this.router.navigate([url]);
  }
  ngOnInit() {

  }
}
