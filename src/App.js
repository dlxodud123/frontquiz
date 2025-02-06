import './App.css';
import Front from './quiz/js/front';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/frontquiz' element={<Front></Front>}></Route>
      </Routes>
    </div>
  );
}

export default App;
