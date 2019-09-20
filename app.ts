import { Stopwatch } from 'ts-stopwatch';
import { MtRequest } from './models/MtRequest';
import { RestApiSender } from './core/RestApiSender';
const baseUrl = "http://162.253.16.28:5010/api/send";

/* TODO: change according to your own data
 * for username & password. If you set 'dlrMask' to 1,
 * please specify the 'dlrUrl'
 */

let req = new MtRequest(
    "<YOUR-USERNAME>", // username
    "<YOUR-PASSWORD>", // password
    "TypeScript Sample", // from
    "60123456789", // to
    "TypeScript sample using HTTP POST & GET", // text
    "1", // coding
    "0", // dlrMask
    "<YOUR-DLR-URL>", // dlrUrl
    "json" // responseType
);

let api = new RestApiSender();

/* TODO: change this between 1 - 2 to switch result
 * 1 = Send using POST
 * 2 = Send using GET
 */

let type = 1;
switch (type) {
    case 1: sendSmsUsingPost(); break;
    case 2: sendSmsUsingGet(); break;
}

async function sendSmsUsingPost() {
    console.log("Executing POST request..");
    const sw = new Stopwatch();
    sw.start();
    let resp = await api.sendPostAsync(req, baseUrl);
    let elapsed = sw.stop();
    console.log(resp);
    console.log(`Time taken: ${elapsed} ms`);
}

async function sendSmsUsingGet() {
    console.log("Executing GET request..");
    const sw = new Stopwatch();
    sw.start();
    let from = encodeURIComponent(req.from);
    let to = encodeURIComponent(req.to);
    let text = encodeURIComponent(req.text);
    let url = `${baseUrl}?gw-username=${req.username}&gw-password=${req.password}&gw-from=${from}&gw-to=${to}&gw-text=${text}&gw-coding=${req.coding}&gw-dlr-mask=${req.dlrMask}&gw-dlr-url=${req.dlrUrl}&gw-resp-type=${req.responseType}`;

    let resp = await api.sendGetAsync(url);
    let elapsed = sw.stop();
    console.log(resp);
    console.log(`Time taken: ${elapsed} ms`);
}