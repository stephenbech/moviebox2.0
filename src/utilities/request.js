
export const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzZlM2NhNThkYzdiZmYxMDc1NDA0MWNjNDBmODVhMCIsInN1YiI6IjY0ZmYxNGY0ZTBjYTdmMDE0ZjZmZGMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sJDlPcMsYwV0g8zeOR0j4l7UTribd7sW9XR39FXqSOY';

export const baseUrl = 'https://api.themoviedb.org/3';


export  const requests = () => {
  return {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'true',
      include_video: 'true',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzZlM2NhNThkYzdiZmYxMDc1NDA0MWNjNDBmODVhMCIsInN1YiI6IjY0ZmYxNGY0ZTBjYTdmMDE0ZjZmZGMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sJDlPcMsYwV0g8zeOR0j4l7UTribd7sW9XR39FXqSOY'
    }
  };
};

// export default (requests )