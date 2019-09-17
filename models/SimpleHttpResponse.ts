export class SimpleHttpResponse {
    readonly statusCode: number;
    readonly responseContentString: string;
    readonly error: string;

    constructor(statusCode: number, responseContentString: string, error: string) {
        this.statusCode = statusCode;
        this.responseContentString = responseContentString;
        this.error = error;
    }
}