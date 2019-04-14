import {
  SET_OBJECTIVE,
  DELETE_OBJECTIVE,
  SET_KEY_RESULT,
  DELETE_KEYRESULT,
  SET_WEEKLY_PLAN,
  DELETE_WEEKLY_PLAN,
  SET_WEEKLY_ACHIEVEMENT,
  DELETE_WEEKLY_ACHIEVEMENT,
  SET_WEEKLY_CHALLENGE,
  DELETE_WEEKLY_CHALLENGE
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
              achievements: [],
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
    }

    case DELETE_WEEKLY_PLAN: {
      const { objectivesList } = state;
      const {
        payload: { planId, objectiveId }
      } = action;
      const objective = objectivesList[objectiveId];
      let weeklyPlanArray = objective.weeklyItems.plans.slice();
      let targetWeeklyPlanIndex = weeklyPlanArray.findIndex(plan => {
        return plan.id === planId;
      });
      weeklyPlanArray = removeFromArrayAtIndex(
        weeklyPlanArray,
        targetWeeklyPlanIndex
      );
      const newObjective = { ...objective };
      newObjective.weeklyItems = { ...objective.weeklyItem };
      newObjective.weeklyItems.plans = weeklyPlanArray;
      const newObjectiveList = objectivesList.slice();
      newObjectiveList[objectiveId] = newObjective;
      return {
        ...state,
        objectivesList: newObjectiveList
      };
    }

    // case SET_WEEKLY_ACHIEVEMENT: {
    //   const objective =
    //     state.objectivesList[action.payload.weeklyAchievement.objectiveId];

    //   objective.weeklyAchievement = [
    //     ...objective.weeklyAchievement,
    //     action.payload.weeklyAchievement
    //   ];

    //   return {
    //     ...state,
    //     objectivesList: [...state.objectivesList]
    //   };
    // }

    case SET_WEEKLY_ACHIEVEMENT: {
      const { objectivesList } = state;
      const {
        payload: { weeklyAchievement, index }
      } = action;

      const currentObjective = objectivesList[index];
      const updatedObjective = Object.assign({}, currentObjective, {
        weeklyItems: {
          ...currentObjective.weeklyItems,
          achievements: currentObjective.weeklyItems.achievements.concat(
            weeklyAchievement
          )
        }
      });

      return Object.assign({}, state, {
        objectivesList: [
          ...objectivesList.slice(0, index),
          updatedObjective,
          ...objectivesList.slice(index + 1)
        ]
      });
    }

    case DELETE_WEEKLY_ACHIEVEMENT: {
      const { objectivesList } = state;
      const {
        payload: { achievementId, objectiveId }
      } = action;

      const objective = objectivesList[objectiveId];
      let weeklyAchievementArray = objective.weeklyItems.achievements.slice();
      let targetWeeklyAchievementIndex = weeklyAchievementArray.findIndex(
        achievement => {
          return achievement.id === achievementId;
        }
      );
      weeklyAchievementArray = removeFromArrayAtIndex(
        weeklyAchievementArray,
        targetWeeklyAchievementIndex
      );

      const newObjective = { ...objective };
      newObjective.weeklyItems = { ...objective.weeklyItems };
      newObjective.weeklyItems.achievements = weeklyAchievementArray;
      const newObjectiveList = objectivesList.slice();
      newObjectiveList[objectiveId] = newObjective;
      return {
        ...state,
        objectivesList: newObjectiveList
      };
    }

    case DELETE_WEEKLY_CHALLENGE: {
      const { objectivesList } = state;
      const {
        payload: { challengeId, objectiveId }
      } = action;

      const objective = objectivesList[objectiveId];
      let weeklyChallengeArray = objective.weeklyItems.challenges.slice();
      let targetWeeklyChallengeIndex = weeklyChallengeArray.findIndex(
        challenge => {
          return challenge.id === challengeId;
        }
      );

      weeklyChallengeArray = removeFromArrayAtIndex(
        weeklyChallengeArray,
        targetWeeklyChallengeIndex
      );

      const newObjective = { ...objective };
      newObjective.weeklyItems = { ...objective.weeklyItem };
      newObjective.weeklyItems.challenges = weeklyChallengeArray;
      const newObjectiveList = objectivesList.slice();
      newObjectiveList[objectiveId] = newObjective;

      return {
        ...state,
        objectivesList: newObjectiveList
      };
    }

    // case SET_WEEKLY_CHALLENGE: {
    //   const objective =
    //     state.objectivesList[action.payload.weeklyChallenge.objectiveId];

    //   objective.weeklyChallenge = [
    //     ...objective.weeklyChallenge,
    //     action.payload.weeklyChallenge
    //   ];

    //   return {
    //     ...state,
    //     objectivesList: [...state.objectivesList]
    //   };
    // }

    case SET_WEEKLY_CHALLENGE: {
      const { objectivesList } = state;
      const {
        payload: { weeklyChallenge, index }
      } = action;

      const currentObjective = objectivesList[index];
      const updatedObjective = Object.assign({}, currentObjective, {
        weeklyItems: {
          ...currentObjective.weeklyItems,
          challenges: currentObjective.weeklyItems.challenges.concat(
            weeklyChallenge
          )
        }
      });
      return Object.assign({}, state, {
        objectivesList: [
          ...objectivesList.slice(0, index),
          updatedObjective,
          ...objectivesList.slice(index + 1)
        ]
      });
    }

    default:
      return state;
  }
}
