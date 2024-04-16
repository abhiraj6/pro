import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Loginp from './Components/Loginp';
import Abhi from './Components/Abhi';
import Signi from './Components/Signi';

function App() {
  return (
    <div className="App">
   <Nav/>
   <br/><br/><br/>
   <Routes>
   <Route path='/' element={<Abhi/>}/>
    <Route path='/sign' element={<Signi/>}/>
    <Route path='/log' element={<Loginp/>}/>
   </Routes>
    </div>
  );
}

export default App;
