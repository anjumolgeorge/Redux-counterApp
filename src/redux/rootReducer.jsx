import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import { formReducer } from "./form/formReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    form : formReducer
})

export default rootReducer;