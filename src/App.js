import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Compoents/Home/Home/Home';
import Login from './Compoents/UserLogIn/Login/Login';
import Registration from './Compoents/UserLogIn/Registration/Registration';
import Navbar from './Compoents/Share/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
