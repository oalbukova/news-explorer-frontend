import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

// import signOut from '../../images/signout.svg';
// import logout from '../../images/logout.svg';

import './App.css';

function App() {


  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <div className='app__elem-background'>
            <Header/>
            <SearchForm/>
          </div>
          <Main/>
        </Route>
        <Route path='/saved-news'>
          <Header/>
          <SavedNews/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
