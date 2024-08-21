import { SUBMIT_FORM } from "./formTypes"

const initialState = {
    name :"empty",
    age:0
}

 export const formReducer = (state = initialState, {type,payload}) => {
switch (type) {
    case SUBMIT_FORM:
        return {
            ...state,
            name:payload.name,
            age: payload.age
        }

    default:
      return state
}
}