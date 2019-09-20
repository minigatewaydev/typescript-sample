"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_stopwatch_1 = require("ts-stopwatch");
var MtRequest_1 = require("./models/MtRequest");
var RestApiSender_1 = require("./core/RestApiSender");
var baseUrl = "http://162.253.16.28:5010/api/send";
/* TODO: change according to your own data
 * for username & password. If you set 'dlrMask' to 1,
 * please specify the 'dlrUrl'
 */
var req = new MtRequest_1.MtRequest("<YOUR-USERNAME>", // username
"<YOUR-PASSWORD>", // password
"TypeScript Sample", // from
"60123456789", // to
"TypeScript sample using HTTP POST & GET", // text
"1", // coding
"0", // dlrMask
"<YOUR-DLR-URL>", // dlrUrl
"json" // responseType
);
var api = new RestApiSender_1.RestApiSender();
/* TODO: change this between 1 - 2 to switch result
 * 1 = Send using POST
 * 2 = Send using GET
 */
var type = 1;
switch (type) {
    case 1:
        sendSmsUsingPost();
        break;
    case 2:
        sendSmsUsingGet();
        break;
}
function sendSmsUsingPost() {
    return __awaiter(this, void 0, void 0, function () {
        var sw, resp, elapsed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Executing POST request..");
                    sw = new ts_stopwatch_1.Stopwatch();
                    sw.start();
                    return [4 /*yield*/, api.sendPostAsync(req, baseUrl)];
                case 1:
                    resp = _a.sent();
                    elapsed = sw.stop();
                    console.log(resp);
                    console.log("Time taken: " + elapsed + " ms");
                    return [2 /*return*/];
            }
        });
    });
}
function sendSmsUsingGet() {
    return __awaiter(this, void 0, void 0, function () {
        var sw, from, to, text, url, resp, elapsed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Executing GET request..");
                    sw = new ts_stopwatch_1.Stopwatch();
                    sw.start();
                    from = encodeURIComponent(req.from);
                    to = encodeURIComponent(req.to);
                    text = encodeURIComponent(req.text);
                    url = baseUrl + "?gw-username=" + req.username + "&gw-password=" + req.password + "&gw-from=" + from + "&gw-to=" + to + "&gw-text=" + text + "&gw-coding=" + req.coding + "&gw-dlr-mask=" + req.dlrMask + "&gw-dlr-url=" + req.dlrUrl + "&gw-resp-type=" + req.responseType;
                    return [4 /*yield*/, api.sendGetAsync(url)];
                case 1:
                    resp = _a.sent();
                    elapsed = sw.stop();
                    console.log(resp);
                    console.log("Time taken: " + elapsed + " ms");
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=app.js.map