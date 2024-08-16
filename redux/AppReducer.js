import { USER_ADDED } from "./Types";

const INITIAL_STATE = {

    isUserSaved:false
 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_ADDED:

        return { ...state, isUserSaved:true}

    
        default:
            return state;
    }
};
