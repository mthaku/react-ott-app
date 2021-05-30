import { combineReducers } from 'redux';
import { items, itemHasErrored } from './items';

export default combineReducers({
  items,
  itemHasErrored
});
