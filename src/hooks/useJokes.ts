import { useState } from 'react';
import IJoke from '../types/joke';

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (newJoke: IJoke) => {
    setSavedJokes([...savedJokes, newJoke]);
  };

  return { savedJokes, saveJoke };
};

export default useJokes;