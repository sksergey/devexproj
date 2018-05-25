import * as user from './reducers/user.reducers';
import * as proj from './reducers/project.reducers';


export interface AppState {
    userState: user.UserState;
    projState: proj.ProjectState;
}