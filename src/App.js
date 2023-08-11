import './App.css';
import {useState} from 'react'
import ClickEventFun from './Functions/ClickEventFun';
import ClassCom from './components/ClassCom';
import FunctionalCom from './components/FunctionalCom';
import PropsWithCom from './components/PropsWithCom';
import StateInCom from './components/StateInCom';
import GetInputValue from './Functions/GetInputValue';
import HideShowToggle from './Functions/HideShowToggle';
import HandelingForm from './Forms/HandelingForm';
import ConditionalRendering from './Molecules/ConditionalRendering';
import FormValidation from './Forms/FormValidation';
import Constructor from './LifeCyceMethods/Constructor';
import DidMount from './LifeCyceMethods/DidMount';

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
      <hr/>
      <HideShowToggle/>
      <hr/>
      <HandelingForm/>
      <hr/>
      <ConditionalRendering/>
      <hr/>
      <FormValidation/>
      <hr/>
      <Constructor/>
      <hr/>
      <DidMount/>
    </div>
  );
}

export default App;
