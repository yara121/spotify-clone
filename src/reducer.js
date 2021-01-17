export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //  token:
  //  "BQBuqYr2KaAdquo-hUKlTS5_NBCOmjbL1ecMHUZDs7bT3MExgBdG47HrTaMBQq-EpBR-sm3nDw9t9Z5vxe8q5xRS5w8m9OhfP97xGpCxG-WlfsiXbW9e7hVF5zSEOpH4KvGw9Ri8dZ8BRsFSeMatsB_Q0NkptOwLM7Mc3lO5976cNYrC",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
       
      };
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly:action.discover_weekly,
        }

    default:
      return state;
  }
};
export default reducer;
