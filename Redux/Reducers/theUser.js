import { THEUSERLOGIN, UPDATEUSER, CLEAR_USER } from "../constants";
const theUser = (state = [], action) => {
    switch (action.type) {
        case THEUSERLOGIN:
            return [action.payload];
        case UPDATEUSER:
            return [action.payload];
        case CLEAR_USER:
            return (state = []);
    }
    return state;
};
export default theUser;
