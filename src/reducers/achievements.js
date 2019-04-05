import { CREATE_ACHIEVEMENTS } from "../actions/achievements";

export default function achievements(state = {}, action) {
  switch (action.type) {
    case CREATE_ACHIEVEMENTS:
      return {
        ...state,
        ...action.achievements
      };
    default:
      return state;
  }
}
