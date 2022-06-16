import { jsx as _jsx } from "react/jsx-runtime";
import * as Finnhub from 'finnhub-ts';
import { createContext, useContext } from 'react';
const FinnhubContext = createContext();
export const useFinnhub = () => useContext(FinnhubContext);
export const FinnhubProvider = ({ client, children }) => {
    return _jsx(FinnhubContext.Provider, { value: client, children: children });
};
export const finnhubClient = (apiKey) => new Finnhub.DefaultApi({
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
export * from 'finnhub-ts';
//# sourceMappingURL=index.js.map