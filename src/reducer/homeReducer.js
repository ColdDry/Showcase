import { FETCHING_HOME_MENU } from "../constants";

const initialState = {
  homeMenu: [
    { id: 0, title: "Redux EX", path: "ReduxEX" },
    { id: 1, title: "Pie Chart", path: "PieChart" }
  ]
};

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    default:
      return state;
      break;
  }
};
