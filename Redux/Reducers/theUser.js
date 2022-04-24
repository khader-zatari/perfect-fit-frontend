import { THEUSERLOGIN, UPDATEUSER } from "../constants";
const theUser = (state = [], action) => {
    switch (action.type) {
        case THEUSERLOGIN:
            return [action.payload];
        case UPDATEUSER:
            return [action.payload];
    }
    return state;
};
export default theUser;
