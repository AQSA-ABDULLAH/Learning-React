import React from 'react'
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
import Hooks from './Hooks/Hooks';
import UseEffect from './Hooks/UseEffect';
import PasswordGenerator from './React/PasswordGenerator';

export default function Home() {
    const [data, setData] = useState("Aqsa");
    function updateData(){
        setData("Welcome "+data)
    }
  return (
    <div>
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
      <hr/>
      <Hooks/>
      <hr/>
      <UseEffect/>
      <hr/>
      <PasswordGenerator/>
    </div>
  )
}
