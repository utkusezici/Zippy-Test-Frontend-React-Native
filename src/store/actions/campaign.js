import { campaignConstants } from "../constants";

export const setCampaign = (campaign)=> dispatch => {
  dispatch( {
    type: campaignConstants.CAMPAIGN,
    payload:campaign
  });
}




