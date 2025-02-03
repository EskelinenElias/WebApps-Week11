import { useState, useEffect } from 'react';
import JokeCard from './JokeCard';
import { Button, Typography } from '@mui/material';
import IJoke from '../types/joke';

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ saveJoke }) => {
  
  
  // Initialize states
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch a joke and change state
  const fetchJoke = async () => {
    
    // Set loading and error states
    setIsLoading(true);
    setError(null);
    
    // Fetch a new joke 
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      // Error handling
      if (error instanceof Error) { 
        if (error.name == "AbortError") {
          console.log("aborted")
        } else {
          setError(error.message);
        } 
      } else { 
        setError("unknown error"); 
      }
      console.error(error)
    } finally {
      // Reset loading state
      setIsLoading(false); 
    }
  };
  
  useEffect(() => {
    // Initialize the abort controller
    const controller = new AbortController();
    
    // Get a new joke
    fetchJoke();
    
    // Return a handle to the controller
    return () => { controller.abort(); }
  }, []);
  
  function handleSaveJoke() {
    if (joke && saveJoke) {
      saveJoke(joke)
    }
  }

  return (
    <>
      <Button variant="contained" onClick={fetchJoke} style={{ margin: 10 }}>Get Joke</Button>
      {isLoading && <Typography>Loading a joke...</Typography>}
      {error && <Typography color="error">Error: {error}</Typography>}
      {joke && (
        <JokeCard 
          key={joke.id} 
          setup={joke.setup}
          punchline={joke.punchline}
          handleSaveJoke={ () => handleSaveJoke() }
        />
      )}
    </>
  );
};

export default FrontPage;
