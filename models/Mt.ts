export class Mt{
    readonly mtId: string;
    readonly receiver: string;
    readonly statusCode: number;
    readonly statusDescription: string;

    constructor(mtId:string, receiver:string, statusCode:number, statusDescription:string){
        this.mtId = mtId;
        this.receiver = receiver;
        this.statusCode = statusCode;
        this.statusDescription = statusDescription;
    }
}