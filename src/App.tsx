import { Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          // Home page
          <Route path="/" element={
            <>
              <FrontPage/>
            </>
          }/>
          // About page
          <Route path="/saved" element={
            <> 
              <h1>About Page</h1>
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
