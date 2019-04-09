import { SET_OBJECTIVE, SET_KEY_RESULT } from "../actions/objectives";

const initialState = {
  objectivesList: []
};

export default function polls(state = initialState, action) {
  switch (action.type) {
    case SET_OBJECTIVE:
      return {
        ...state,
        objectivesList: [
          ...state.objectivesList,
          {
            name: action.payload.objective,
            category: action.payload.category,
            keyResults: []
          }
        ]
      };
    case SET_KEY_RESULT: {
      const objective = state.objectivesList[action.payload.objectiveId];

      objective.keyResults = [
        ...objective.keyResults,
        action.payload.keyResult
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };
    }

    default:
      return state;
  }
}
