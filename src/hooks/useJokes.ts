import { useState } from 'react';
import { Joke } from '../components/FrontPage';

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  const saveJoke = (newJoke: Joke) => {
    setSavedJokes([...savedJokes, newJoke]);
  };

  return { savedJokes, saveJoke };
};

export default useJokes;