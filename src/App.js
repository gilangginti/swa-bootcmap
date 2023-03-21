import logo from './logo.svg';
import './App.css';
import Checkbox from './component/Checkbox';
import LogoSanber from "./logo.png"
import { useState } from 'react';
import Tugas1 from './pages/Tugas1';
import Tugas2 from './TugasHooks/Tugas2';
import Tugas2ClassComp from './TugasClass/Tugas2ClassComp';
import Tugas3 from './TugasCrudHooks/Tugas3';
function App() {
  return (
    <div>
      <div className="App">
          
           {/* <Tugas1 /> */}

           {/* <Tugas2 /> */}

           {/* <Tugas2ClassComp /> */}
           
           <Tugas3 />
         
          
          </div>
    </div>
  );
}

export default App;
