const initialState = {
    movies: [],
    error: null,
  };
  
  export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload,
          error: null,
        };
      case 'SEARCH_MOVIES_FAILURE':
        return {
          ...state,
          movies: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  