import { combineReducers } from "redux";

import objectives from "./objectives";
import plans from "./plans";
import achievements from "./achievements";
import challenges from "./challenges";

export default combineReducers({
  objectives,
  plans,
  achievements,
  challenges
});
