import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';








const App = (props) => {

  
  return (
    
      <div className='app-wrapper'>
        <Header />
        <NavBar  />

        <div className='app-wrapper-content' >
          <Route path='/Profile'
            render={() => <Profile  />} />

          <Route path='/Dialogs'
            render={() => <DialogsContainer  />} />

          <Route path='/News' render={() => <News />} />
          <Route path='/Musik' render={() => <Musik />} />
          <Route path='/Settings' render={() => <Settings />} />
          
            


        </div>


      </div>
    
    );
}









export default App;
