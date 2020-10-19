const cartListReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_CARTLIST':
            return [...state];
        default:
            return state;
    }
}

export default cartListReducer;