import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
    );
  }
}
export default Missions;
