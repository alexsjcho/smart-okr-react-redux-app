export const CREATE_ACHIEVEMENTS = "CREATE_ACHIEVEMENTS";

export function createAchievements(achievements) {
  return {
    type: CREATE_ACHIEVEMENTS,
    achievements
  };
}
