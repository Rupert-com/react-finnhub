import * as Finnhub from 'finnhub-ts';
import { FC, ReactNode } from 'react';
declare type IFinnhubProviderProps = {
    client: any;
    children: ReactNode;
};
export declare const useFinnhub: () => Finnhub.DefaultApi;
export declare const FinnhubProvider: FC<IFinnhubProviderProps>;
export declare const finnhubClient: (apiKey: string) => Finnhub.DefaultApi;
export * from 'finnhub-ts';
