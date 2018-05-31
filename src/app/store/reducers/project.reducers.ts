import { Project} from '../../projects/models/project';
import { PROJECTS} from '../../projects/test-projects';
import * as ProjectActions from '../actions/project.actions';

import {map} from 'rxjs/operators';

export interface State {
    project_list?: Project[];
    currentProject?: number;
}

export const initialState: State = {
    // project_list: PROJECTS,
};

export function projectReducer(state = initialState, action: ProjectActions.Actions) {
    switch (action.type) {
        case ProjectActions.SHOWALL_PROJECTS: {
            state.project_list = PROJECTS;
            return {
                ...state};
        }
        case ProjectActions.SELECT_PROJECT: {
            state.currentProject = action.payload;
            return {
                ...state};
        }
        case ProjectActions.SHOW_KEYWORDS: {
            return {
                ...state};
        }
        default: {
            return state;
        }
    }
}

export const getProjects = (state: State) => state.project_list;
export const getCurrentProject = (state: State) => state.currentProject;