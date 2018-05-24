import { Project} from './models/project';
import { Keyword} from './models/keyword';

export const PROJECTS: Project[] = [
    { id: 1, name: 'technologies', keywords: [{text: 'php'}, {text: 'javascript'}, {text: 'java'}, {text: 'c'}, {text: 'c++'}]},
    { id: 2, name: 'frameworks', keywords: [{text: 'codeigniter'}, {text: 'yii'}, {text: 'opencart'}, {text: 'wordpress'}]},
    { id: 3, name: 'ide`s', keywords: [{text: 'phpstorm'}, {text: 'sublime'}, {text: 'notepad++'}]},
    { id: 4, name: 'sale proj', keywords: [{text: 'buy'}, {text: 'sale'}, {text: 'shop'}]},
    { id: 5, name: 'some proj', keywords: [{text: 'cddcdc'}, {text: 'dscdscs'}, {text: 'sdcdscdsc'}, {text: 'jhjhgvh'}]} ];

    // { id: 1, name: 'technologies', keywords: ['php', 'javascript', 'java', 'c', 'c++']},
    // { id: 2, name: 'frameworks', keywords: ['codeigniter', 'yii', 'opencart', 'wordpress']},
    // { id: 3, name: 'ide`s', keywords: ['phpstorm', 'sublime', 'notepad++']},
    // { id: 4, name: 'sale proj', keywords: ['buy', 'sale', 'shop']},
    // { id: 5, name: 'some proj', keywords: ['cddcdc', 'dscdscs', 'sdcdscdsc', 'jhjhgvh']} ];