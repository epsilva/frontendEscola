import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Menu />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
