import React from 'react';
import './style.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <UserContainer />
      {/*
      <ItemContainer cake/>
      <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />*/}
      </div>
    </Provider>
  );
}

export default App;
