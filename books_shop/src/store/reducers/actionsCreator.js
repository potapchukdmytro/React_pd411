import * as bookActions from "./bookReducer/actions";
import * as authActions from "./authReducer/actions";

export const actions = {
    ...bookActions,
    ...authActions
}