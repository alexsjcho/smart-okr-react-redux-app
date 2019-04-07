import { CREATE_PLANS } from "../actions/plans";

const initialState = {
  plansList: [],
  plan: {
    name: null
  }
};

export default function plans(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLANS:
      return {
        ...state,
        plansList: [...state.plansList, { name: action.payload }]
      };
    default:
      return state;
  }
}
