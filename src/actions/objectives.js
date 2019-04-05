export const CREATE_OBJECTIVES = "CREATE_OBJECTIVES";

export function createObjectives(objectives) {
  return {
    type: CREATE_OBJECTIVES,
    objectives
  };
}
