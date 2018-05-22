import { Injectable } from '@angular/core';
import { Project} from './project';
import { PROJECTS} from './test-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    // projectsList: Project[];
    projectsList = PROJECTS;
    currentProject: Project;
  constructor() { }
  getProject(id: number): Project {
    return this.currentProject = PROJECTS.find(proj => proj.id === id);
  }
}
