// console.log('Starting course');
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App/App'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'
const client = new ApolloClient({
  uri: 'https://petgram-server-aecs-anibal-corral.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  },
  cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
