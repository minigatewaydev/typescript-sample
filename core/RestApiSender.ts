import { SimpleHttpResponse } from "../models/SimpleHttpResponse";
import { MtRequest } from "../models/MtRequest";
import Axios from "axios";

export class RestApiSender {

    async sendPostAsync(mtReq: MtRequest, baseUrl: string) {
        let resp = new SimpleHttpResponse(99, null, null);

        try {

            var data = {
                'gw-username': mtReq.username,
                'gw-password': mtReq.password,
                'gw-from': mtReq.from,
                'gw-to': mtReq.to,
                'gw-text': mtReq.text,
                'gw-dlr-mask': mtReq.dlrMask,
                'gw-dlr-url': mtReq.dlrUrl,
                'gw-resp-type': mtReq.responseType
            }
            const response = await Axios.post(baseUrl, data);
            resp = new SimpleHttpResponse(response.status, await response.data, null);
        } catch (error) {
            resp = new SimpleHttpResponse(99, null, error);
        }

        return resp;
    }

    async sendGetAsync(url: string) {
        let resp = new SimpleHttpResponse(99, null, null);

        try {
            const response = await Axios.get(url);
            resp = new SimpleHttpResponse(response.status, await response.data, null);

        } catch (error) {
            resp = new SimpleHttpResponse(99, null, error);
        }

        return resp;
    }
}