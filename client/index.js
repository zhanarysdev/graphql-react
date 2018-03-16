import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/songList';
import App from './components/App';
import SongCreate from './components/songCreate';
const client = new ApolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory} >
        <Route path="/"  component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new"  component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
