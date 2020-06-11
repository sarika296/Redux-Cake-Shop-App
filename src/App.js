import React from 'react';
import '../src/style/style.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer from './components/CakeContainer'
import ChocolateContainer from './components/ChocolateContainer'
import UserContainer from './components/UserContainer';
import CounterContainer from './components/CounterContainer'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
        <CounterContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
