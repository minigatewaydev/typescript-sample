import { Mt } from "./Mt";
import {MtInfo} from "./MtInfo";

export class MtResponse {
    readonly username: string;
    readonly chargingPlan: string;
    readonly message: string;
    readonly isSuccess: boolean;
    readonly creditDeducted: number;
    readonly submitted: MtInfo;
    readonly mtList: Array<Mt>;

    constructor(username: string, chargingPlan: string, message: string, isSuccess: boolean, creditDeducted: number, submitted: MtInfo, mtList: Array<Mt>) {
        this.username = username;
        this.chargingPlan = chargingPlan;
        this.message = message;
        this.isSuccess = isSuccess;
        this.creditDeducted = creditDeducted;
        this.submitted = submitted;
        this.mtList = mtList;
    }
}