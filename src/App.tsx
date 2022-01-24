import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Subscribe from './View/Subscribe/Subscribe';

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Subscribe />} />
    </Routes>
  </div>
);

export default App;
