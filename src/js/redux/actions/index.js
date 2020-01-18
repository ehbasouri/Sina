import { UPDATE_GENERAL_PROPS } from "../../const/actions";

export const updateGeneralProps = (payload) => {
    return {
        type: UPDATE_GENERAL_PROPS,
        payload
    };
};