import {
  SET_OBJECTIVE,
  SET_KEY_RESULT,
  SET_WEEKLY_PLAN,
  SET_WEEKLY_ACHIEVEMENT,
  SET_WEEKLY_CHALLENGE
} from "../actions/objectives";

const initialState = {
  objectivesList: []
};

export default function objectives(state = initialState, action) {
  switch (action.type) {
    case SET_OBJECTIVE:
      return {
        ...state,
        objectivesList: [
          ...state.objectivesList,
          {
            name: action.payload.objective,
            category: action.payload.category,
            keyResults: [],
            date: action.payload.date
          }
        ]
      };
    case SET_KEY_RESULT: {
      const objective = state.objectivesList[action.payload.objectiveId];

      objective.keyResults = [
        ...objective.keyResults,
        action.payload.keyResult,
        action.payload.tool
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };
    }

    case SET_WEEKLY_PLAN: {
      const objective =
        state.objectivesList[action.payload.weeklyPlan.objectiveId];

      objective.weeklyPlans = [
        ...objective.weeklyPlans,
        action.payload.weeklyPlan
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };
    }

    case SET_WEEKLY_ACHIEVEMENT: {
      const objective =
        state.objectivesList[action.payload.weeklyAchievement.objectiveId];

      objective.weeklyAchievement = [
        ...objective.weeklyAchievement,
        action.payload.weeklyAchievement
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };
    }

    case SET_WEEKLY_CHALLENGE: {
      const objective =
        state.objectivesList[action.payload.weeklyChallenge.objectiveId];

      objective.weeklyChallenge = [
        ...objective.weeklyChallenge,
        action.payload.weeklyChallenge
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
