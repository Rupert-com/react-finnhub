# react-finnhub

## Docs and Source

building on [finnhub-ts](https://github.com/Rupert-com/finnhub-ts#readme)

## Usage

### Provider

```typescript
import { finnhubClient, FinnhubProvider } from 'react-finnhub'

const client = finnhubClient('YOUR-API-KEY')

<FinnhubProvider client={client}>
    <App />
</FinnhubProvider>
```

### Hook

```typescript
import React, { FunctionComponent, useState } from 'react'
import { BasicFinancials, useFinnhub } from 'react-finnhub'

type ITestProps = {}

export const App: FunctionComponent<ITestProps> = (props) => {
  const finnhub = useFinnhub()
  const [state, setState] = useState<BasicFinancials>()

  finnhub.companyBasicFinancials('AAPL', 'all').then((res) => setState(res.data))

  return <h1>{JSON.stringify(state)}</h1>
}
```
