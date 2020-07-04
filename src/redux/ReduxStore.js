import {createStore, combineReducers} from 'redux';
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";



let reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;