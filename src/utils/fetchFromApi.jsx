import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        maxResult: '50'    
    },
    headers: {
      'X-RapidAPI-Key': '9a96975178msh39070ce942c3480p1087bejsnd8f0f5e3a99d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
  }