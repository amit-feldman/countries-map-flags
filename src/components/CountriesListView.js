import React from 'react';
import countries from '../data/countries.json';
import CountriesListItem from './CountriesListItem';

export default class CountriesListView extends React.Component {
  render() {
    const countryItem = Object.keys(countries).map((country, idx) => (
      <div className="col-12 col-sm-4 col-md-3" key={idx}>
        <CountriesListItem
          meta={countries[country]}
          srcMap={`/assets/maps/${country.toLowerCase()}/vector.svg`}
          srcFlag={`/assets/flags/${country.toLowerCase()}.svg`}
          draggable="false"
        />
      </div>
    ));

    return (
      <div className="row align-items-center align-self-center">
        {countryItem}
      </div>
    );
  }
}
