import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((cadaPlaneta) => (
            <PlanetCard
              planetName={
                cadaPlaneta.name
              }
              planetImage={
                cadaPlaneta.image
              }
              key={
                cadaPlaneta.name
              }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
