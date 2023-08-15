import './App.css';
import HomeContainer from './Redux/Containers/HomeContainer';

// Here are react import
// import Home from './Home';


//Here are redux import
function App() {

  return (
    <div className="App">
      {/* Here is React File */}
      {/* <Home/> */}

      {/* Here is Redux Files */}
      <HomeContainer/>
    </div>
  );
}

export default App;
