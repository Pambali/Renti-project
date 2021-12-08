
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Routes, Route} from 'react-router-dom';
import Forgot_password from './component/Forgot_password';
import Reset_password from './component/Reset_password';
import Home from './component/homepage/Home';

function App() {
  return (
    <div className="App">
      <Routes>
               <Route path="/home"  element={Home()} />
               <Route path ="/signup" element={Signup()}/> 
               <Route path ="/login" element={Login()}/>
               <Route path ="/forgot_password" element={Forgot_password()} />
               <Route path ="/reset_password"  element={Reset_password()}/>
         </Routes>
         
    </div>
  );
}

export default App;
