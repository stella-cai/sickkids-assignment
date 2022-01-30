import {combineReducers} from 'redux';

const userStatusReducer = (state = false, action) => {
    switch(action.type) {
        case "LOGIN":
            return true;

        case "LOGOUT":
            return false;

        default:
            return false;
    }
}

const rootReducer = combineReducers({
    userStatus: userStatusReducer
    // other reducers
});

export default rootReducer;