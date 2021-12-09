
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Routes, Route} from 'react-router-dom';
import Forgot_password from './component/Forgot_password';
import Home from './component/Homepages/Home';
import Userinfo from './component/Homepages/Userinfo';

function App() {
  return (
    <div className="App">
      <Routes>
               <Route path="/home"  element={Home()} />
               <Route path ="/signup" element={Signup()}/> 
               <Route path ="/login" element={Login()}/>
               <Route path ="/forgot_password" element={Forgot_password()} />
               <Route path="/userinfo" element={Userinfo()}/>
         </Routes>
         
    </div>
  );
}

export default App;
