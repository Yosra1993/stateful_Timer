import React from 'react';
import Time from './timer.js';
import './timer.css';


class App extends React.Component {
  
  render() {
    return ( <div>
      <Time ms={25500000} />
     
    </div>
      
    );
  }
}

export default App;
