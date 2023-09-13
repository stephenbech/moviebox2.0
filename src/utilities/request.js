import axios from 'axios';

export const apiKey = '0c6e3ca58dc7bff10754041cc40f85a0';

export const baseUrl = 'https://api.themoviedb.org/3';


export const requests = async () => {
      try {
        const response = await axios.get(`${baseUrl}/discover/movie/`, {
          params: {
            api_key: apiKey,
            page: 1, // Adjust the page number as needed
          },
        });
    
        // Access the response data
        const topMovies = response.data.results;
        return topMovies;
      } catch (error) {
        // Handle errors (e.g., network error, API error)
        console.error('Error fetching top movies:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
      }
    };

// export default (requests )