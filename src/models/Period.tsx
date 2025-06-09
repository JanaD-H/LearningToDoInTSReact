export class Period{
    eachXWeeks: number;
    dayOfWeek: number;

    constructor(dayOfWeek: number, eachXWeeks: number){
        this.eachXWeeks = eachXWeeks;
        this.dayOfWeek = dayOfWeek;
    }

}