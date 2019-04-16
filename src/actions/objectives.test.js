import * as objectives from "./objectives";

describe("all the objectives actions", () => {
  it("should create an objective", () => {
    const testObjective = {
      objective: "Test objective",
      category: {
        value: "sales",
        label: "sales"
      },
      date: {
        startDate: "2019-04-02T07:00:00.000Z",
        endDate: "2019-04-26T07:00:00.000Z"
      }
    };
    const expectedAction = {
      type: objectives.SET_OBJECTIVE,
      payload: {
        ...testObjective
      }
    };
    const resultAction = objectives.setObjective(testObjective);
    expect(resultAction).toEqual(expectedAction);
  });
});
