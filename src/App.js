import './App.css';
import {useState} from 'react'
import ClickEventFun from './Functions/ClickEventFun';
import ClassCom from './components/ClassCom';
import FunctionalCom from './components/FunctionalCom';
import PropsWithCom from './components/PropsWithCom';
import StateInCom from './components/StateInCom';

function App() {
  const [data, setData] = useState("Aqsa");
    function updateData(){
        setData("Welcome "+data)
    }
  return (
    <div className="App">
      <FunctionalCom/>
      <br/>
      <ClassCom/>
      <br/>
      <ClickEventFun/>
      <br/>
      <StateInCom/>
      <br/>
      <PropsWithCom name={data} />
      <button onClick={updateData} >Start</button>
    </div>
  );
}

export default App;
