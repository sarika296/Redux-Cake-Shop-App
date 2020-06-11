import React from 'react';
import '../src/style/style.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer from './components/CakeContainer'
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <div style={{fontSize:20}}>
          <UserContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
