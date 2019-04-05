import { combineReducers } from "redux";

import objectives from "./objectives";
import keyresults from "./keyresults";
import plans from "./plans";
import achievements from "./achievements";
import challenges from "./challenges";

export default combineReducers({
  objectives,
  keyresults,
  plans,
  achievements,
  challenges
});
