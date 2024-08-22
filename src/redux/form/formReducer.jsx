import { SUBMIT_FORM } from "./formTypes"

const initialState = {
    name :"empty",
    age:0
}

 export const formReducer = (state = initialState, {type,name,age}) => {
switch (type) {
    case SUBMIT_FORM:
        return {
            ...state,
          name,
           age
        }

    default:
      return state
}
}