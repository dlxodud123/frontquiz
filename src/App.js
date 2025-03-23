import './App.css';
import Front from './quiz/js/front';
import Front2 from './quiz/js/front2';
import Travel from './quiz/js/travel';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/frontquiz' element={<Front></Front>}></Route>
        <Route path='/frontquiz/frontquiz2' element={<Front2></Front2>}></Route>
        <Route path='/travel' element={<Travel></Travel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
