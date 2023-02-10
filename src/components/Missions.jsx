// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Missions.css';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className='missions-container'>
        <Title headline="Missões" />
        <div className="mission-cards">
          {
            missions.map((mis, i) => (
              // <MissionCard key={ i } mission={ mis } />
              <MissionCard
                key={ i }
                name={ mis.name }
                year={ mis.year }
                country={ mis.country }
                destination={ mis.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
