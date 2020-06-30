import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';








const App = (props) => {

  
  return (
    
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.state.sidebar} />

        <div className='app-wrapper-content' >
          <Route path='/Profile'
            render={() => <Profile 
            profilePage = {props.state.profilePage} 
            dispatch= {props.dispatch}    />} />

          <Route path='/Dialogs'
            render={() => <Dialogs store = {props.store} />} />

          <Route path='/News' render={() => <News />} />
          <Route path='/Musik' render={() => <Musik />} />
          <Route path='/Settings' render={() => <Settings />} />
          
            


        </div>


      </div>
    
    );
}









export default App;
