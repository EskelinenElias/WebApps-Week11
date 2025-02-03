import { Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import SavedPage from './components/SavedPage';
import { useJokes } from './hooks/useJokes';

// Router functionality
function Router() {
  const { savedJokes, saveJoke, deleteJoke } = useJokes();
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={
            <FrontPage saveJoke={saveJoke}/>
          }/>
          <Route path="/saved" element={
            <SavedPage savedJokes={savedJokes} deleteJoke={deleteJoke}/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// Main App
function App() {
  return (
    <Suspense fallback="loading">
      <Router/>
    </Suspense>
  );

}

export default App; 
