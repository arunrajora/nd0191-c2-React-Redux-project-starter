import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { loadInitialData } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<div>Add</div>} />
        <Route path='/leaderboard' element={<div>Leader</div>} />
        <Route
          path='/questions/:question_id'
          element={<div>Question Details</div>}
        />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
