import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.spacex.land/graphql/',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);