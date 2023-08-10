import './App.css';
import {useState} from 'react'
import ClickEventFun from './Functions/ClickEventFun';
import ClassCom from './components/ClassCom';
import FunctionalCom from './components/FunctionalCom';
import PropsWithCom from './components/PropsWithCom';
import StateInCom from './components/StateInCom';
import GetInputValue from './Functions/GetInputValue';

function App() {
  const [data, setData] = useState("Aqsa");
    function updateData(){
        setData("Welcome "+data)
    }
  return (
    <div className="App">
      <FunctionalCom/>
      <hr/>
      <ClassCom/>
      <hr/>
      <ClickEventFun/>
      <hr/>
      <StateInCom/>
      <hr/>
      <PropsWithCom name={data} />
      <button onClick={updateData} >Start</button>
      <hr/>
      <GetInputValue/>
    </div>
  );
}

export default App;
