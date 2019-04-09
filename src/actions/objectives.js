export const SET_OBJECTIVE = "SET_OBJECTIVE";
export const SET_KEY_RESULT = "SET_KEY_RESULT";
export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";

export const setObjective = ({ objective, category }) => ({
  type: SET_OBJECTIVE,
  payload: {
    objective,
    category
  }
});

export const setKeyResult = (keyResult, objectiveId) => ({
  type: SET_KEY_RESULT,
  payload: { keyResult, objectiveId }
});

export const setWeeklyPlan = weeklyPlan => ({
  type: SET_WEEKLY_PLAN,
  payload: weeklyPlan
});
