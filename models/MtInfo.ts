export class MtInfo {
    readonly text: string;
    readonly encoding: string;
    readonly totalPart: number;
    readonly totalChar: number;
    readonly dlrRequested: boolean;
    readonly dlrUrl: string;
    readonly validUntil: string;

    constructor(text: string, encoding: string, totalPart: number, totalChar: number, dlrRequested: boolean, dlrUrl: string, validUntil: string) {
        this.text = text;
        this.encoding = encoding;
        this.totalPart = totalPart;
        this.totalChar = totalChar;
        this.dlrRequested = dlrRequested;
        this.dlrUrl = dlrUrl;
        this.validUntil = validUntil;
    }
}