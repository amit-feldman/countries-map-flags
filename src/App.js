import React from 'react';
import './App.scss';
import CountriesListView from './components/CountriesListView';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Countries Map-Flags</h3>
        <hr />
        <CountriesListView />
        <hr />
        <p className="text-light">
          &copy; 2018 Amit Feldman.
        </p>
      </div>
    );
  }
}
