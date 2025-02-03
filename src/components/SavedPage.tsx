import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IJoke from '../types/joke';
import JokeContent from './JokeContent';

interface SavedPageProps {
    savedJokes: IJoke[];
}

const SavedPage: React.FC<SavedPageProps> = ({ savedJokes }) => {
  return (
    <>
      { savedJokes.length === 0 ? (
        <Typography>No saved jokes.</Typography>
      ) : (
        savedJokes.map((joke) => (
          <Card key={joke.id}>
            <JokeContent setup={joke.setup} punchline={joke.punchline}/>
          </Card>
        )
      )) }
    </>
  );
};

export default SavedPage;
