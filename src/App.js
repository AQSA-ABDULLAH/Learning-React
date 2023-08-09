import './App.css';
import ClickEventFun from './Functions/ClickEventFun';
import ClassCom from './components/ClassCom';
import FunctionalCom from './components/FunctionalCom';
import StateInCom from './components/StateInCom';

function App() {
  return (
    <div className="App">
      <FunctionalCom/>
      <br/>
      <ClassCom/>
      <br/>
      <ClickEventFun/>
      <br/>
      <StateInCom/>
    </div>
  );
}

export default App;
