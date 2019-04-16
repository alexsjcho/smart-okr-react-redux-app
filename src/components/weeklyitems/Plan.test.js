import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Plan from "./Plan.js";

Enzyme.configure({ adapter: new Adapter() });
describe("Plan", () => {
  it("render a new plan successfully", () => {
    const plan = {
      value: ""
    };
    const props = {
      isNew: true,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const formElement = baseComponent.find("form");
    expect(formElement).toBeTruthy();
    expect(formElement.children().length).toEqual(3);
  });

  it("render a populated plan successfully", () => {
    const plan = {
      value: "current plan"
    };
    const props = {
      isNew: false,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const formElement = baseComponent.find("form");
    expect(formElement).toBeTruthy();
    expect(formElement.children().length).toEqual(3);
  });

  it("should hide the plan on toggle of sort down icon", () => {
    const plan = {
      value: ""
    };
    const props = {
      isNew: true,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);

    // show card info is true by default
    expect(baseComponent.state().showCardInfo).toBeTruthy();

    // toggling should make show card info as false
    const toggleIcon = baseComponent.find("i.fa-sort-down");
    toggleIcon.simulate("click");
    expect(baseComponent.state().showCardInfo).toBeFalsy();
  });

  it("should handle on plan change", () => {
    const baseComponent = shallow(<Plan />);
    // mock event object
    const preventDefault = jest.fn();
    const event = {
      preventDefault: preventDefault,
      target: {
        value: "new plan"
      }
    };

    // check for initial state of value
    expect(baseComponent.state().plan.value).toEqual("");

    baseComponent.instance().onPlanChange(event);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(baseComponent.state().plan.value).toEqual("new plan");
  });

  it("should not submit if it is not new", () => {
    const onSubmit = jest.fn();
    const plan = {
      value: "new plan"
    };
    const objectiveId = 0;
    const props = {
      isNew: false,
      objectiveId: objectiveId,
      onSubmit: onSubmit,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const preventDefault = jest.fn();
    const event = {
      preventDefault: preventDefault
    };

    baseComponent.instance().handleSubmit(event);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it("should handle submit with no errors", () => {
    const onSubmit = jest.fn();
    const plan = {
      value: "new plan"
    };
    const objectiveId = 0;
    const props = {
      isNew: true,
      objectiveId: objectiveId,
      onSubmit: onSubmit,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const preventDefault = jest.fn();
    const event = {
      preventDefault: preventDefault
    };

    baseComponent.instance().handleSubmit(event);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(baseComponent.state().errors).toEqual("");
    expect(onSubmit).toHaveBeenCalledWith(plan, objectiveId);
    expect(baseComponent.state().plan.value).toEqual("");
  });

  it("should handle submit with errors", () => {
    const onSubmit = jest.fn();
    const plan = {
      value: ""
    };
    const props = {
      isNew: true,
      objectiveId: 0,
      onSubmit: onSubmit,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const preventDefault = jest.fn();
    const event = {
      preventDefault: preventDefault
    };

    baseComponent.instance().handleSubmit(event);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(baseComponent.state().errors).toEqual(
      "Plan description is required. Yo"
    );
  });

  it("should handle delete", () => {
    const deleteWeeklyPlan = jest.fn();
    const plan = {
      id: "planId",
      value: "delete something"
    };
    const objectiveId = 0;
    const props = {
      isNew: true,
      objectiveId: objectiveId,
      deleteWeeklyPlan: deleteWeeklyPlan,
      plan: plan
    };
    const baseComponent = shallow(<Plan {...props} />);
    const preventDefault = jest.fn();
    const event = {
      preventDefault: preventDefault
    };

    baseComponent.instance().handleDelete(event);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(deleteWeeklyPlan).toHaveBeenCalledWith(objectiveId, "planId");
  });
});
