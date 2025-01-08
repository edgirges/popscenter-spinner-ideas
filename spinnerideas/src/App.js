import './App.css';
import React from "react";
import Spinner1 from "./components/Spinner1";
import Spinner2 from './components/Spinner2';
import Spinner3 from './components/Spinner3';
import Ripple from './components/Ripple';
import SlicedCircleLoader from './components/SlicedCircleLoader';
import Bars1 from './components/Bars1';
import PlusSignToCircle from './components/PlusSignToCircle';

function App() {
  return (
    <div className="App">
      <Spinner1 />
      <Spinner2 />
      <Spinner3 />
      <Ripple />
      <SlicedCircleLoader />
      <Bars1 />
      <PlusSignToCircle />
      
    </div>
  );
}

export default App;
