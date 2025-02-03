import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

function FrontPage() {
  
  // Track first render (To Prevent the joke from loading twice)
  const isFirstRender = useRef(true); 
  
  // Initialize states
  const [joke, setJoke] = useState<Joke | null>(null);
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
        setError(error.message); 
        console.error(error.message); 
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
    

  return (
    <>
      <Button variant="contained" onClick={ () => fetchJoke() }>Get a new Joke!</Button>
      {isLoading && <Typography>Loading a joke...</Typography>}
      {error && <Typography color="error">Error: {error}</Typography>}
      {joke && (
        <Card key={joke.id}>
          <CardContent>
            { /* Joke setup */ }
            <Typography variant="h5" component="div">{joke.setup}</Typography>
            { /* Joke punchline */ }
            <Typography variant="h6">{joke.punchline}</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FrontPage;