import React from 'react';
import HeroContainer  from '../containers/HeroContainer';
import JSAbstractContainer  from '../containers/JSAbstractContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroContainer />
        <JSAbstractContainer />
      </div>
    )
  }
}
export default Home;