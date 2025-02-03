import { Button, Card, CardContent, Typography } from '@mui/material';

interface JokeCardProps {
  key: number; 
  setup: string; 
  punchline: string; 
  handleSaveJoke?: () => void; 
  handleDeleteJoke?: () => void; 
}

const JokeCard: React.FC<JokeCardProps> = ({ key, setup, punchline, handleSaveJoke, handleDeleteJoke }) => {
  return (
    <Card key={key} style={{ backgroundColor: '#f0f0f0', maxWidth: 345, margin: 10 }}>
      <CardContent>
        <Typography variant="h5" component="div">{setup}</Typography>
        <Typography variant="h6">{punchline}</Typography>
        { handleSaveJoke && <Button variant="contained" onClick={handleSaveJoke}>Save Joke</Button> } 
        { handleDeleteJoke && <Button variant="contained" onClick={handleDeleteJoke}>Delete</Button> }
      </CardContent>
    </Card>
  )
}
  
export default JokeCard; 
