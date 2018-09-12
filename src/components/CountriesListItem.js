import React from 'react';

export default class CountriesListItem extends React.Component {
  render() {
    const { meta } = this.props;
    return (
      <div className="animated fadeIn" key={meta}>
        <small className="text-light">{meta.name}</small>
        <div
          className="figure img-thumbnail"
          style={{
            minHeight: '100%',
            minWidth: '100%',
          }}
        >
          <img
            src={this.props.srcFlag}
            alt={meta.name}
            draggable={this.props.draggable}
            className="figure-img img-fluid"
            style={{
              WebkitMaskImage: `url(${this.props.srcMap})`,
              MaskImage: `url(${this.props.srcMap})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              MaskRepeat: 'no-repeat',
              minHeight: '100%',
              minWidth: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}
