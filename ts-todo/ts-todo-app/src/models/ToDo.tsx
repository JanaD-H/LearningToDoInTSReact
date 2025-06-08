class ToDo {
    name: string; 
    done: boolean;
    description: string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
        this.done = false;
    }
}