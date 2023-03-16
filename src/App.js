import logo from './logo.svg';
import './App.css';
import Checkbox from './component/Checkbox';
import LogoSanber from "./logo.png"
import { useState } from 'react';

function App() {
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  const [dataChecked, setDataChecked] = useState([])
  const onClick = (select) => {
    let arr = [...dataChecked]
    let indexes = arr.findIndex((item)=> item === select)
    if(indexes===-1){
      arr.push(select)
    } else {
      arr.splice(indexes,1)
    }
    setDataChecked(arr)
  }
  const handleClick =()=>{
    alert(JSON.stringify(dataChecked))
  }
  return (
    <div>
      <div className="App">
            <div className="card p-10">
              <img src={LogoSanber} />
              <h1 className='text-left'>THINS TO DO</h1>
              <p className='text-left'>During Bootcamp in Sanbercode</p>
              <div className='border-bottom'/>
              <div className='mt-5'>
              {thingsToDo.map((item,index)=><Checkbox onClick={()=>onClick(item)} key={index} data={item}/>)}
              </div>
              <button className='btn btn-primary mt-5' type='button' onClick={handleClick}>SEND</button>
            </div>
          </div>
    </div>
  
  );
}

export default App;
