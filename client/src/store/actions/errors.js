import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

// action creator
export const addError = error => ({
  type: ADD_ERROR,
  error
});

// action creator
export const removeError = () => ({
  type: REMOVE_ERROR
});