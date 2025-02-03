import { useState } from 'react';
import IJoke from '../types/joke';

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  // Function to save new joke
  const saveJoke = (newJoke: IJoke) => {
    setSavedJokes([...savedJokes, newJoke]);
  };
  
  // Function to delete jokes by id
  const deleteJoke = (id: number) => {
    const newSavedJokes = savedJokes.filter((joke) => joke.id !== id);
    setSavedJokes(newSavedJokes);
  }

  return { savedJokes, saveJoke, deleteJoke};
};

export { useJokes };