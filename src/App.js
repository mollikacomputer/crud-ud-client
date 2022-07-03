import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adduser' element={<AddUser/>}  />
        <Route path='/updateuser/:id' element={<UpdateUser/>} />
      </Routes>
    </div>
  );
}

export default App;
