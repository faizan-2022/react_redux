const initialState = 5

const multiAndDivi = (state = initialState, action) => {
    switch(action.type){
        case "MULTI": return state * action.payload;
        case "DIVI": return state / action.payload;
        default: return state;
    }
}

export default multiAndDivi;