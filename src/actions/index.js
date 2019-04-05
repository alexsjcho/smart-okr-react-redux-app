import { createObjectives } from "./actions/objectives";
import { createKeyResults } from "./actions/keyresults";
import { createPlans } from "./actions/plans";
import { createAchievements } from "./actions/achievements";
import { createChallenges } from "./actions/challenges";

export function handleUserActions() {
  return dispatch => {
    return handleUserActions().then(
      ({ objectives, keyresults, plans, achievements, challenges }) => {
        dispatch(createObjectives(objectives)),
          dispatch(createKeyResults(keyresults)),
          dispatch(createPlans(plans)),
          dispatch(createAchievements(achievements)),
          dispatch(createChallenges(challenges));
      }
    );
  };
}
