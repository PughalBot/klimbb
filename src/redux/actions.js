import axios from 'axios';

const API_KEY = '710df61fb41b93387fe400fe16b3d0c2'; // Obtain your API key from themoviedb.org

export const searchMovies = (actorName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actorName}`
    );

    const actorId = response.data.results[0].id;

    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}`
    );

    dispatch({
      type: 'SEARCH_MOVIES_SUCCESS',
      payload: movieResponse.data.cast,
    });
  } catch (error) {
    dispatch({
      type: 'SEARCH_MOVIES_FAILURE',
      payload: error.message,
    });
  }
};
