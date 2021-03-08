import React from 'react';
import { createUseStyles } from 'react-jss';
import { Route, Switch } from 'react-router-dom';
import './assets/styles/App.sass'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Help from './Pages/Help';

const App = () => {
  const styles = useStyles()

  return (
    <div className = {styles.root}>
      <Sidebar/>

      <div className = {styles.content}>
        <Header/>
        <Switch>
          <Route exact path = '/help' component = {Help}/>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  root: {
  
  },

  content: {
    minHeight: '100vh',
    backgroundColor: '#f7fafb',
    width: 'calc(100% - 211px)',
    marginLeft: '211px',
    padding: '13px 20px',
    transition: 'height ease .3'
  }
})

export default App;
