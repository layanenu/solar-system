import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="titulo-planetas">
          <Title headline="Planetas" />
        </div>
        <div className="container-planetas">
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
      </div>
    );
  }
}

export default SolarSystem;
