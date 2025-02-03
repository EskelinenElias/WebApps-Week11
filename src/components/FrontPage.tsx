import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IJoke from '../types/joke';
import JokeContent from './JokeContent';

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ saveJoke }) => {
  
  const isFirstRender = useRef(true);
  
  // Initialize states
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch a joke and change state
  async function fetchJoke() {
    // Set loading and error states
    setIsLoading(true);
    setError(null);
    try {
      // Fetch joke
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      // Check response
      if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
      // Parse JSON 
      const data = await response.json();
      // Update joke state
      setJoke(data);
    } catch (error) {
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
      setIsLoading(false); 
    }
  };
  
  useEffect(() => {
    // Initialize the abort controller
    const controller = new AbortController();
    
    if (isFirstRender.current) {
      
      // Set to false after the first render
      isFirstRender.current = false; 
      
      // Fetch a new joke
      fetchJoke();
    }
    
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
      <Button variant="contained" onClick={ () => fetchJoke() }>Get Joke</Button>
      {isLoading && <Typography>Loading a joke...</Typography>}
      {error && <Typography color="error">Error: {error}</Typography>}
      {joke && (
        <Card key={joke.id}>
          <JokeContent setup={joke.setup} punchline={joke.punchline}/>
          <CardContent>
            <Button variant="contained" onClick={handleSaveJoke}>Save Joke</Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FrontPage;
