import { UPDATE_GENERAL_PROPS } from "../../const/actions";

const INITIAL_STATES_GENERAL = {
    token: "token",
    orders: getCart(),
    beers:[]
};

export function getCart(params) {
    const orders = JSON.parse(localStorage.getItem("orders"));
    if (!orders) {
        return [];
    }
    return orders;
}

const general_reducer = (state = INITIAL_STATES_GENERAL, action) => {
    switch (action.type) {
        case UPDATE_GENERAL_PROPS:
            var newProps = {};
            if (Array.isArray(action.payload)) {
                for (var prop of action.payload) {
                    newProps = { ...newProps, [prop.key]: prop.value };
                }
                return { ...state, ...newProps };
            }
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            return state;
    }
};
export default general_reducer;