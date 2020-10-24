import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';

import signOut from '../../images/signout.svg';
import logout from '../../images/logout.svg';

import './App.css';

function App() {


  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <div className='app__elem-background'>
            <Header
             // handleChangeBackground={changeBackground}
            />
            <SearchForm/>
          </div>
        </Route>
        <Route path='/saved-news'>
          <Header
           // handleChangeBackground={changeBackground}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
