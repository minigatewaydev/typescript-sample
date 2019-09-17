export class Mt{
    readonly mtId: string;
    readonly receiver: string;
    readonly status: number;
    readonly message: string;

    constructor(mtId:string, receiver:string, status:number, message:string){
        this.mtId = mtId;
        this.receiver = receiver;
        this.status = status;
        this.message = message;
    }
}