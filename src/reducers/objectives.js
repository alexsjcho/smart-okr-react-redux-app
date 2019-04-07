import { SET_OBJECTIVE, SET_KEY_RESULT } from "../actions/objectives";

const initialState = {
  objectivesList: [],
  objective: {
    name: null,
    keyResults: []
  }
};

export default function polls(state = initialState, action) {
  switch (action.type) {
    case SET_OBJECTIVE:
      return {
        ...state,
        objectivesList: [
          ...state.objectivesList,
          { name: action.payload, keyResults: [] }
        ]
      };
    case SET_KEY_RESULT:
      return {
        ...state,
        objective: {
          ...state.objective,
          keyResults: [...state.objective.keyResults, action.payload]
        }
      };
    default:
      return state;
  }
}
