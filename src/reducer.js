import { useContext } from "react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: [],
    token: null,
    // token: "BQD9j2A_KoANJos_XOdQGZcEMCxjbeo1u9IdlVz_wc3uTnCEJRCv2eu1PzxyHe-m74EHm-3p4E8bGhJZ3tImwadPhcbsl3RCqQLAHkgY08VWD1ZiPA2-NR0trsOcMzyc9R4G7Oxs-OWCBS2E7HuV6f4WX04H1MubeqtQFRlQaHE8ALlx",
};

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type){
        case 'SET_DISCOVERWEEKLY':
            return {
                ...state, discover_weekly: action.discover_weekly,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, playlists: action.playlists,
            };
        case 'SET_TOKEN':
            return {
                ...state, token: action.token,
            };
        case 'SET_USER':
            return {
                ...state, user:action.user,
            };
        default:
            return state;
    }
};

export default reducer;