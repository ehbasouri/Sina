import store from "./store";
import { updateGeneralProps } from "./actions";
window.store = store;
window.addArticle = updateGeneralProps;