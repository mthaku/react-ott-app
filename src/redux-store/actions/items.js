import axios from "axios";

export function itemHasErrored(bool) {
  return {
    type: "ITEM_HAS_ERRORED",
    hasErrored: bool
  };
}

export function itemsFetchDataSuccess({ data, title, action }) {
  return {
    type: action,
    title,
    data,
  };
}

export function setSearchResults(data) {
  return {
    type: "SEARCH_RESULTS",
    data
  };
}

/* es6 sintaxis
export const itemsFetchDataSuccess = (items) => ({
  type: 'IEMS_FETCH_DATA_SUCESS',
  items
})*/

export const itemsFetchData = (url, method, action) => {
  return (dispatch) => {
    axios({ url, method })
      .then((res) => {
        dispatch(
          itemsFetchDataSuccess({
            data: res.data.page["content-items"].content,
            title: res.data.page.title,
            action
          })
        );
      })
      .catch(() => {
        dispatch(itemHasErrored(true));
      });
  };
}
