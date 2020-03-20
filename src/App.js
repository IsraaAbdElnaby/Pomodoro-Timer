import React from 'react';
import './App.css';
import Timer from './components/Timer';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Timer minutes = {1} seconds = {60}/>
      </div>
      <div>
        <Button variant = "success" size = "lg" >Start</Button>{' '}
        <Button variant = "primary" size = "lg">Reset</Button>{' '}
        <Button variant = "danger" size = "lg">Stop</Button>
      </div>
    </div>
  );
}

export default App;
