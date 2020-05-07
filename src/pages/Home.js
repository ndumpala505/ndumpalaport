import React from 'react';
import HeroContainer  from '../containers/HeroContainer';
import JSAbstractContainer  from '../containers/JSAbstractContainer';
import ProjectsContainer  from '../containers/ProjectsContainer';
import ProjectPortfolio  from '../containers/ProjectPortfolio';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroContainer />
        <JSAbstractContainer />
        <ProjectsContainer />
        <ProjectPortfolio />
      </div>
    )
  }
}
export default Home;