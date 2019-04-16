import objectivesReducer from "./objectives";
import { SET_OBJECTIVE } from "../actions/objectives";

describe("all objectives reducers", () => {
  it("should set an objective", () => {
    const initialState = {
      objectivesList: []
    };

    const testAction = {
      type: SET_OBJECTIVE,
      payload: {
        objective: "Test objective",
        category: {
          value: "sales",
          label: "sales"
        },
        date: {
          startDate: "2019-04-02T07:00:00.000Z",
          endDate: "2019-04-26T07:00:00.000Z"
        }
      }
    };
    const expectedState = {
      objectivesList: [
        {
          name: "Test objective",
          category: {
            value: "sales",
            label: "sales"
          },
          keyResults: [],
          weeklyItems: {
            plans: [],
            achievements: [],
            challenges: []
          },
          date: testAction.payload.date
        }
      ]
    };
    const nextState = objectivesReducer(initialState, testAction);
    expect(nextState).toEqual(expectedState);
  });
});
