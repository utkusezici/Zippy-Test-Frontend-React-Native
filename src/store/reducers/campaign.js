import { campaignConstants } from "../constants";

const initialState = {
  campaign: null,
};

export default function campaignReducer(state = initialState, { type, payload }) {
let nextState = {...state}
  switch (type) {
      case campaignConstants.CAMPAIGN:
        return {
          ...initialState,
          campaign: payload
        };

    default:
      return {
        ...state
      }
  }
  return nextState
}
