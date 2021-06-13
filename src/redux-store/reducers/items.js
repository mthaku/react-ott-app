const initialState = {
  page1Data: [],
  page2Data: [],
  page3Data: [],
  searchResults: [],
  title1: "Genre",
  title2: "Genre",
  title3: "Genre"
};

export const itemHasErrored = (state = false, action) => {
  switch (action.type) {
    case "ITEM_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE1_DATA":
      return {
        ...state,
        page1Data: action.data,
        title1: action.title
      };
    case "PAGE2_DATA":
      return {
        ...state,
        page2Data: action.data,
        title2: action.title
      };
    case "PAGE3_DATA":
      return {
        ...state,
        page3Data: action.data,
        title3: action.title
      };
    case "SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.data
      };
    default:
      return state;
  }
};
