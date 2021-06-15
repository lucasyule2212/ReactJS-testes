function loginReducer(state=false,action) { //REDUCER DO LOGIN (RECEBE ACTIONS E RETORNA O QUE ELAS FAZEM)
    switch (action.type) {
        case 'LOGIN':
            return true;
            
        case 'LOGOUT':
            return false;
        default:
            return state;
            
    }
}

export default loginReducer;