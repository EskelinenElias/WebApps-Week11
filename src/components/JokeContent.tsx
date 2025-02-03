import React from "react"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface JokeContentProps {
  setup: string; 
  punchline: string; 
}
const JokeContent: React.FC<JokeContentProps> = ({ setup, punchline }) => {
  return (
    <CardContent>
      <Typography variant="h5" component="div">{setup}</Typography>
      <Typography variant="h6">{punchline}</Typography>
    </CardContent>
  )
}
  
export default JokeContent; 