import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Authentication/Authentication';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' Component={Login}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
