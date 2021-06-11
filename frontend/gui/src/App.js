import {useState, useEffect} from 'react';
import {Router} from '@reach/router'
import './App.css';
import Form from './components/Form'
import Result from './components/Result'
import NotFound from './components/NotFound'

const App = () => { 
  const [result, setResult] = useState(null)

  return (
    <>
        <div>
          <Form setResult={setResult} />
          <Router>
            <Result path="/:id" result={result} />
            <NotFound path="/obiwan" />
          </Router>
        </div>

    </>
  );
}

export default App;
