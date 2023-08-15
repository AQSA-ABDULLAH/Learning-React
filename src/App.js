import './App.css';

// Here are react import
// import Home from './Home';


//Here are redux import
import HomeContainer from './Redux/Containers/HomeContainer';
import HeaderContainer from './Redux/Containers/HeaderContainer';
function App() {

  return (
    <div className="App">
      {/* Here is React File */}
      {/* <Home/> */}

      {/* Here is Redux Files */}
      <HeaderContainer/>
      <HomeContainer />
    </div>
  );
}

export default App;
