import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { loadInitialData } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);
  return <div className='App'>Employee poll</div>;
}

export default App;
