import React from 'react';
import '../src/style/style.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer from './components/CakeContainer'
import ChocolateContainer from './components/ChocolateContainer'
import CounterContainer from './components/CounterContainer'

function App() {
  return (
    <Provider store = {store}>
      <div className="cake">
        Cake Shop App
      </div>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
