import { CREATE_KEYRESULTS } from "../actions/keyresults";

export default function keyresults(state = {}, action) {
  switch (action.type) {
    case CREATE_KEYRESULTS:
      return {
        ...state,
        ...action.keyresults
      };
    default:
      return state;
  }
}
