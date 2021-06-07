import {useState, useEffect} from 'react';
import axios from 'axios'
import ShowAll from './components/ShowAll'
import ShowOne from './components/ShowOne'
import {Router} from '@reach/router'
import './App.css';

const App = () => { 
  const [user, setUser] = useState({})

  return (
    <>
        <Router>
          <ShowAll path="/showall" />
          <ShowOne path="/showone/:login" />
        </Router>    
    </>
  );
}

export default App;
