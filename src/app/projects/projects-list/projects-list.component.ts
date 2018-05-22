import { Component, OnInit } from '@angular/core';

import { ProjectsService} from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
  }
}
