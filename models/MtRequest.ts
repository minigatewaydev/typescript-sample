export class MtRequest {

    readonly username: string;
    readonly password: string;
    readonly from: string;
    readonly to: string;
    readonly text: string;
    readonly coding: string;
    readonly dlrMask: string;
    readonly dlrUrl: string;
    readonly responseType: string;

    constructor(username: string, password: string,
        from: string, to: string, text: string, coding: string,
        dlrMask: string, dlrUrl: string, responseType: string) {

        this.username = username;
        this.password = password;
        this.from = from;
        this.to = to;
        this.text = text;
        this.coding = coding;
        this.dlrMask = dlrMask;
        this.dlrUrl = dlrUrl;
        this.responseType = responseType;
    }

}