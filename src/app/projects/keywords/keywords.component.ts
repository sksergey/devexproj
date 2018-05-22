import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project} from '../project';
import { ProjectsService} from '../projects.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {
  project: Project;
  constructor(private route: ActivatedRoute, private projectService: ProjectsService, private location: Location) {
  }

    ngOnInit(): void {
        this.getProject();
    }

    getProject(): void {
      // console.log(this.route);
      const id = +this.route.snapshot.paramMap.get('id');
        this.projectService.getProject(id);
        this.project = this.projectService.currentProject;
    }

    goBack(): void {
        this.location.back();
    }

}
