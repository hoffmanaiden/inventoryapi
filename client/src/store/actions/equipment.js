import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_EQUIPMENT, REMOVE_EQUIPMENT} from "../actionTypes"


// action creator
export const loadEquipment = equipment => ({
  type: LOAD_EQUIPMENT,
  equipment
});

export const fetchEquipment = () => {
  return dispatch => {
    return apiCall("get", "/api/items")
      .then(res => {
        dispatch(loadEquipment(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};