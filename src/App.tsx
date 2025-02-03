import { Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import SavedPage from './components/SavedPage';
import { useJokes } from './hooks/useJokes';

function Router() {
  const { savedJokes, saveJoke, deleteJoke } = useJokes();
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          { /* Home page */}
          <Route path="/" element={
            <>
              <FrontPage saveJoke={saveJoke}/>
            </>
          }/>
          { /* Saved page */}
          <Route path="/saved" element={
            <> 
              <SavedPage savedJokes={savedJokes} deleteJoke={deleteJoke}/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback="loading">
      <Router/>
    </Suspense>
  );

}

export default App; 
