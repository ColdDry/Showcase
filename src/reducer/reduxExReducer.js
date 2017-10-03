import { EDIT_REDUXEX_LIST_DATA } from "../constants";

const initialState = {
  listData: []
};
export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case EDIT_REDUXEX_LIST_DATA:
      return {
        ...state,
        listData: action.data
      };
      break;
    default:
      return state;
      break;
  }
};
