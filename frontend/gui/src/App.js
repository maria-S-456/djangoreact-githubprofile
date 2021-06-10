import {useState, useEffect} from 'react';
import axios from 'axios'
import ShowAll from './components/ShowAll'
import ShowOne from './components/ShowOne'
import {Router} from '@reach/router'
import './App.css';

const App = () => { 
  const [username, setUsername] = useState("")
  const [profile, setProfile] = useState({})

  useEffect(() => {
      axios.get('https://api.github.com/users/' + username)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
        <div>
          <form onSubmit={(e) => setUsername(e.target.value)}>
            <input type="text" />
            <button type="submit">Find User</button>
          </form>
        </div>
        <div>
        {profile.login}
        </div>

    </>
  );
}

export default App;
