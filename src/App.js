import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/Details'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/movie/:id" element={<Details/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
