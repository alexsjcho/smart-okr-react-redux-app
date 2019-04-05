import { CREATE_OBJECTIVES } from "../actions/objectives";

export default function polls(state = {}, action) {
  switch (action.type) {
    case CREATE_OBJECTIVES:
      return {
        ...state,
        ...action.objectives
      };
    default:
      return state;
  }
}
