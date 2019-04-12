import logger from "./logger";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default composeWithDevTools(applyMiddleware(thunk, logger));
