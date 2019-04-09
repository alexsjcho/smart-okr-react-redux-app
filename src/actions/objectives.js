export const SET_OBJECTIVE = "SET_OBJECTIVE";
export const SET_KEY_RESULT = "SET_KEY_RESULT";

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
