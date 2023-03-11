import './App.css';
import { AllRoutes } from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';
import { Navbar2 } from './Components/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
      <AllRoutes/>
    </div>
  );
}

export default App;
