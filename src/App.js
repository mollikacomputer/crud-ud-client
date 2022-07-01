import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} >Home</Route>
        <Route path='/adduser' element={<AddUser/>} >Add User</Route>
      </Routes>
    </div>
  );
}

export default App;
