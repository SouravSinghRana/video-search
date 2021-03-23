import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const [error , setError] = useState(false);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    setError(false);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    if(response.data.items.length === 0 )
    {
      setError(true);
    }
    setVideos(response.data.items);
  };

  return [videos, search, error];
};

export default useVideos;