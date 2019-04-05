import { CREATE_CHALLENGES } from "../actions/challenges";

export default function challenges(state = {}, action) {
  switch (action.type) {
    case CREATE_CHALLENGES:
      return {
        ...state,
        ...action.challenges
      };
    default:
      return state;
  }
}
