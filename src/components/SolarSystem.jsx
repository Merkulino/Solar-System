import React, { Component } from 'react';
import '../styles/SolarSystem.css'
import PlanetCard from './PlanetCard';
import Title from './Title';
import planetsData from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className='solar-system-component'>
        <Title headline="Planetas" />
        <div className="planetCards">
          {
            planetsData.map((plan, i) => (
              <PlanetCard planetName={ plan.name } planetImage={ plan.image } key={ i } />
            ))
          }
        </div>
      </div>
    );
  }
}
