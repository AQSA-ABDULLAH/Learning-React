import './App.css';
import ClickEventFun from './Functions/ClickEventFun';
import ClassCom from './components/ClassCom';
import FunctionalCom from './components/FunctionalCom';

function App() {
  return (
    <div className="App">
      <FunctionalCom/>
      <br/>
      <ClassCom/>
      <br/>
      <ClickEventFun/>
    </div>
  );
}

export default App;
