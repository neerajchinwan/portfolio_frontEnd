import './App.css';
import About from './Components/about/About';
import Home from './Components/home/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './Components/work/Work';
import ToDoList from './Components/toDoList/ToDoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/todo' element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
