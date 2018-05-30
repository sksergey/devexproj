import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Project} from '../../projects/models/project';

export const SHOWALL_PROJECTS = '[Project] ShowAll';
export const SELECT_PROJECT = '[Project] SelectProject';
export const SHOW_KEYWORDS = '[Project] ShowKeywords';

export class ShowAll implements Action {
    readonly type = SHOWALL_PROJECTS;

    constructor(public payload: Project[]) {}
}

export class SelectProject implements Action {
    readonly type = SELECT_PROJECT;

    constructor(public payload: number) {}
}

export class ShowKeywors implements Action {
    readonly type = SHOW_KEYWORDS;

    constructor() {}
}

export type Actions =
    ShowAll
    | SelectProject
    | ShowKeywors;
