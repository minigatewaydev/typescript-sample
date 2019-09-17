import { Mt } from "./Mt";

export class MtResponse{
    readonly username:string;
    readonly chargingPlan:string;
    readonly message:string;
    readonly creditDeducted: number;
    readonly mtList: Array<Mt>;

    constructor(username:string,chargingPlan:string,message:string,creditDeducted:number,mtList:Array<Mt>){
        this.username = username;
        this.chargingPlan =chargingPlan;
        this.message = message;
        this.creditDeducted =creditDeducted;
        this.mtList = mtList;
    }
}