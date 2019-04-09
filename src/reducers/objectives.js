import {
  SET_OBJECTIVE,
  SET_KEY_RESULT,
  SET_WEEKLY_PLAN
} from "../actions/objectives";

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

    case SET_WEEKLY_PLAN: {
      const objective = state.objectivesList[action.payload.objectiveId];

      objective.weeklyPlans = [
        ...objective.weeklyPlans,
        action.payload.weeklyPlan
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };
    }
    //Plan

    default:
      return state;
  }
}
