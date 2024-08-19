import { INCREMENT } from "./counterTypes";

const initialState = {
    count:0
}



 const counterReducer = (state = initialState, action) => {
   switch (action.type) {
    case INCREMENT:
              return {
                count : state.count + 1
              }        
        
    default:
       return state
   }
}
export default counterReducer;