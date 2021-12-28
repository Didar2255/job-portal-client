import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Compoents/Home/Home/Home';
import Login from './Compoents/UserLogIn/Login/Login';
import Registration from './Compoents/UserLogIn/Registration/Registration';
import Navbar from './Compoents/Share/NavBar/Navbar';
import CreateJob from './Compoents/Home/CreateJob/CreateJob';
import AuthProvider from './Compoents/AuthProvider/AuthProvider';
import PrivetRoute from './Compoents/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<PrivetRoute><Home /></PrivetRoute>} />
            <Route path='/home' element={<PrivetRoute><Home /></PrivetRoute>} />
            <Route path='createJob' element={<PrivetRoute><CreateJob /></PrivetRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
