import {LOAD_EQUIPMENT, REMOVE_EQUIPMENT} from "../actionTypes";

const items = (state=[], action) => {
  switch(action.type){
    case LOAD_EQUIPMENT:
      return [...action.equipment];
    default:
      return state;
  }
}

export default items;