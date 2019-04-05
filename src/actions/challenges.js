export const CREATE_CHALLENGES = "CREATE_CHALLENGES";

export function createChallenges(challenges) {
  return {
    type: CREATE_CHALLENGES,
    challenges
  };
}
