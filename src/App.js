import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adduser' element={<AddUser/>}  />
      </Routes>
    </div>
  );
}

export default App;
