import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="container-missions">
        <div className="titulo-missoes">
          <Title headline="Missões" />
        </div>
        <div className="container-cada-missao">
          {
            missions.map((cadaMissao) => (
              <MissionCard
                name={
                  cadaMissao.name
                }
                year={
                  cadaMissao.year
                }
                country={
                  cadaMissao.country
                }
                destination={
                  cadaMissao.destination
                }
                key={ cadaMissao.name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default Missions;
