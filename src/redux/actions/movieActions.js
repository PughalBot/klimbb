// src/redux/actions/movieActions.js
import axios from 'axios';
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants/actionTypes';

const API_KEY = '710df61fb41b93387fe400fe16b3d0c2'; // Replace with your themoviedb.org API key

export const fetchMovies = (actorName) => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actorName}`)
      .then((response) => {
        const actorId = response.data.results[0].id;
        return axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}`);
      })
      .then((response) => {
        dispatch(fetchMoviesSuccess(response.data.cast));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};
