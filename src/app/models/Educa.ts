export class Educa {
    id?:number;
    title:string;
    starts:number;
    ends:number;
    school:string;
    status:string;
    urlimg:string;


    constructor(title:string,starts:number,ends:number,school:string,status:string,urlimg:string){
        this.title=title;
        this.starts=starts;
        this.ends=ends;
        this.school=school;
        this.status=status;
        this.urlimg=urlimg;

    }
    
} 