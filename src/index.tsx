import * as Finnhub from 'finnhub-ts'
import { createContext, FC, ReactNode, useContext } from 'react'

type IFinnhubProviderProps = {
  client: any
  children: ReactNode
}

//@ts-ignore
const FinnhubContext = createContext<DefaultApi>()

export const useFinnhub = (): Finnhub.DefaultApi => useContext(FinnhubContext)
export const FinnhubProvider: FC<IFinnhubProviderProps> = ({ client, children }) => {
  return <FinnhubContext.Provider value={client}>{children}</FinnhubContext.Provider>
}

export const finnhubClient = (apiKey: string) =>
  new Finnhub.DefaultApi({
    apiKey,
    isJsonMime: (input) => {
      try {
        JSON.parse(input)
        return true
      } catch (error) {}
      return false
    },
  })

export * from 'finnhub-ts'
