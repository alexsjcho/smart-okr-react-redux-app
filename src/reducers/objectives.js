import {
  SET_OBJECTIVE,
  DELETE_OBJECTIVE,
  SET_KEY_RESULT,
  DELETE_KEYRESULT,
  SET_WEEKLY_PLAN,
  SET_WEEKLY_ACHIEVEMENT,
  SET_WEEKLY_CHALLENGE
} from "../actions/objectives";
import { removeFromArrayAtIndex } from "../utils/helper";

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
            weeklyItems: {
              plans: [],
              achivements: [],
              challenges: []
            },
            date: action.payload.date
          }
        ]

        //Different way versus spread operator
        // objectiveLists: state.objectivesList.concat({ /* your object */ })
      };
    case DELETE_OBJECTIVE:
      return Object.assign({}, state, {
        objectivesList: removeFromArrayAtIndex(
          state.objectivesList,
          action.payload.index
        )
      });
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

    case DELETE_KEYRESULT: {
      const { objectivesList } = state;
      const {
        payload: { keyResultId, objectiveId }
      } = action;
      const objective = objectivesList[objectiveId];
      let keyResultsArray = objective.keyResults.slice();
      let targetKeyResultIndex = keyResultsArray.findIndex(keyResult => {
        return keyResult.id === keyResultId;
      });
      keyResultsArray = removeFromArrayAtIndex(
        keyResultsArray,
        targetKeyResultIndex
      );
      const newObjective = { ...objective };
      newObjective.keyResults = keyResultsArray;
      const newObjectivesList = objectivesList.slice();
      newObjectivesList[objectiveId] = newObjective;
      return {
        ...state,
        objectivesList: newObjectivesList
      };
    }

    case SET_WEEKLY_PLAN: {
      const { objectivesList } = state;
      const {
        payload: { weeklyPlan, index }
      } = action;

      console.log("inex", index);
      const currentObjective = objectivesList[index];
      const updatedObjective = Object.assign({}, currentObjective, {
        weeklyItems: {
          ...currentObjective.weeklyItems,
          plans: currentObjective.weeklyItems.plans.concat(weeklyPlan)
        }
      });

      return Object.assign({}, state, {
        objectivesList: [
          ...objectivesList.slice(0, index),
          updatedObjective,
          ...objectivesList.slice(index + 1)
        ]
      });

      /*const objective =
        state.objectivesList[action.payload.weeklyPlan.objectiveId];

      objective.weeklyPlans = [
        ...objective.weeklyPlans,
        action.payload.weeklyPlan
      ];

      return {
        ...state,
        objectivesList: [...state.objectivesList]
      };*/
    }

    // case UPDATE_WEEKLY_PLAN: {
    //   const { objectivesList } = state;

    //   const {
    //     payload: { updatedValue, objectiveId, planId }
    //   } = action;

    //   const currentObjective = objectivesList[index];
    //   const currentPlan = currentObjective.weeklyItems.plans[planId];

    //   currentPlan.name = updatedValue;

    //   return {
    //     ...state,
    //     objectiveList: [...state.objectivesList]
    //   };
    // }

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
