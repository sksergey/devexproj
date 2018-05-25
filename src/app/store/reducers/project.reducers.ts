import { Project} from '../../projects/models/project';
import { PROJECTS} from '../../projects/test-projects';
import * as ProjectActions from '../actions/project.actions';

export interface ProjectState {
    project_list: Project[];
    currentProject: Project | null;
}

export const initialProjectState: ProjectState = {
    project_list: PROJECTS,
    currentProject: null
};

export function projectReducer(state = initialProjectState, action: ProjectActions.Actions) {
    switch (action.type) {
        case ProjectActions.SHOWALL_PROJECTS: {
            console.log('case SHOWALL_PROJECTS');
            return {
                ...state};
        }
        case ProjectActions.SELECT_PROJECT: {
            console.log('case SELECT_PROJECT');
            return {
                ...state};
        }
        case ProjectActions.SHOW_KEYWORDS: {
            console.log('case SHOW_KEYWORDS');
            return {
                ...state};
        }
        default: {
            console.log('UNKNOWN project action being handled!');
            return state;
        }
    }
}