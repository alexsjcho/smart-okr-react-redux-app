export const CREATE_KEYRESULTS = "CREATE_KEYRESULTS";

export function createKeyResults(keyresults) {
  return {
    type: CREATE_KEYRESULTS,
    keyresults
  };
}
