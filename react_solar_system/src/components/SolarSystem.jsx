import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planetsData from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planetsData.map((plan, i) => (
            <PlanetCard planetName={ plan.name } planetImage={ plan.image } key={ i } />
          ))
        }
      </div>
    );
  }
}
