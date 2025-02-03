import IJoke from '../types/joke';
import JokeContent from './JokeContent';
import { Typography, Button, Card, CardContent } from '@mui/material/';
import JokeCard from './JokeCard';

interface SavedPageProps {
  savedJokes: IJoke[];
  deleteJoke: (id: number) => void; 
}

const SavedPage: React.FC<SavedPageProps> = ({ savedJokes, deleteJoke }) => {
  
  function handleDeleteJoke(id: number) {
    deleteJoke(id); 
  }
  
  return (
    <>
      { savedJokes.length === 0 ? (
        <Typography>No saved jokes yet.</Typography>
      ) : (
        savedJokes.map((joke) => (
          <JokeCard 
            key={joke.id} 
            setup={joke.setup}
            punchline={joke.punchline}
            handleDeleteJoke={ () => handleDeleteJoke(joke.id)}
          />
        )
      )) }
    </>
  );
};

export default SavedPage;


/* 
<Card key={joke.id}>
  <JokeContent setup={joke.setup} punchline={joke.punchline}/>
  <CardContent>
    <Button variant="contained" onClick={() => handleDeleteJoke(joke.id)}>Delete</Button>
  </CardContent>
</Card>

*/