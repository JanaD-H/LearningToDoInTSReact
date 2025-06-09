import {Period} from './Period';
export class ToDo {
    name: string; 
    done: boolean;
    description: string;
    period: Period | null;

    constructor(name: string, description: string, period: Period | null){
        this.name = name;
        this.description = description;
        this.done = false;
        this.period = period;
    }
}