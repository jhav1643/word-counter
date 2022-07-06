import './App.css';
import Navbar from './Compnents/Navbar';
import Textform from './Compnents/Textform';
import React, { useState } from 'react';
import Alert from './Compnents/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'

      showAlert("Dark Mode has been Enabled", "success")
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/">
              <Textform heading='Your Text' showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;