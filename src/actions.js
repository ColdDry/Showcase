import { EDIT_REDUXEX_LIST_DATA } from "./constants";
import configureStore from "./configureStore";
const store = configureStore();

export function addReduxExListItem(data) {
  return {
    type: EDIT_REDUXEX_LIST_DATA,
    data
  };
}
