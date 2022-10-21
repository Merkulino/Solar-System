import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MissionCard extends Component {
  render() {
    // const { mission: { name, year, country, destination } } = this.props; <-- O teste não roda assim :/
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">{name}</p>
        <hr />
        <div className="cardInfo">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
