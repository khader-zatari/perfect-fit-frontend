import { THEUSERLOGIN } from "../constants";
const theUser = (state = [], action) => {
    switch (action.type) {
        case THEUSERLOGIN:
            return [...state, action.payload];
    }
    return state;
};
export default theUser;
