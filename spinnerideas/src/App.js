import './App.css';
import React from "react";
import Spinner1 from "./components/Spinner1";
import Spinner2 from './components/Spinner2';
import Spinner3 from './components/Spinner3';
import Ripple from './components/Ripple';
import SlicedCircleLoader from './components/SlicedCircleLoader';

function App() {
  return (
    <div className="App">
      <Spinner1 />
      <Spinner2 />
      <Spinner3 />
      <Ripple />
      <SlicedCircleLoader />
    </div>
  );
}

export default App;
