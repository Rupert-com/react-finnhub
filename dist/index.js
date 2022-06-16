"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finnhubClient = exports.FinnhubProvider = exports.useFinnhub = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Finnhub = __importStar(require("finnhub-ts"));
const react_1 = require("react");
const FinnhubContext = (0, react_1.createContext)();
const useFinnhub = () => (0, react_1.useContext)(FinnhubContext);
exports.useFinnhub = useFinnhub;
const FinnhubProvider = ({ client, children }) => {
    return (0, jsx_runtime_1.jsx)(FinnhubContext.Provider, { value: client, children: children });
};
exports.FinnhubProvider = FinnhubProvider;
const finnhubClient = (apiKey) => new Finnhub.DefaultApi({
    apiKey,
    isJsonMime: (input) => {
        try {
            JSON.parse(input);
            return true;
        }
        catch (error) { }
        return false;
    },
});
exports.finnhubClient = finnhubClient;
__exportStar(require("finnhub-ts"), exports);
//# sourceMappingURL=index.js.map