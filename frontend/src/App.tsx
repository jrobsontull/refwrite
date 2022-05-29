import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/general/Routing';

import './assets/css/global.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
