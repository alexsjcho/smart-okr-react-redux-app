import { CREATE_PLANS } from "../actions/plans";

export default function plans(state = {}, action) {
  switch (action.type) {
    case CREATE_PLANS:
      return {
        ...state,
        ...action.plans
      };
    default:
      return state;
  }
}
