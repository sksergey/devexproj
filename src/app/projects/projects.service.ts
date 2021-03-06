import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { PROJECTS } from './test-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  currentProject: Project;
  constructor() { }
  getProject(id: number): Project {
    return this.currentProject = PROJECTS.find(proj => proj.id === id);
  }
}
