export const CREATE_PLANS = "CREATE_PLANS";

export function createPlans(plans) {
  return {
    type: CREATE_PLANS,
    plans
  };
}
