import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuestion from './components/AddQuestion';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import QuestionDetails from './components/QuestionDetails';
import { loadInitialData } from './store/actions';
import LoadingBar from 'react-redux-loading-bar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);
  return (
    <div>
      <LoadingBar />
      <NavBar />
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/add'
          element={
            <ProtectedRoute>
              <AddQuestion />
            </ProtectedRoute>
          }
        />
        <Route
          path='/leaderboard'
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/questions/:question_id'
          element={
            <ProtectedRoute>
              <QuestionDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='*'
          element={
            <ProtectedRoute>
              <h1 align='center'>404 page</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
