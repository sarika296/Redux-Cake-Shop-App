import React from 'react';
import './style.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
