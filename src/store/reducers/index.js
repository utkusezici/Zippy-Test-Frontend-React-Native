import { combineReducers } from "redux";
import campaignReducer from "./campaign";

export default combineReducers({
  campaign: campaignReducer
});