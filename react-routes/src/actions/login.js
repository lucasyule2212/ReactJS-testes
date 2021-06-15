function loginAction() { //ACTIONS DO LOGIN, RETORNAM OS PARAMETROS PARA O REDUCER TRATAR AS ACTIONS
    return {type:'LOGIN'}
}
function logoutAction() {
    return {type:'LOGOUT'}
}

export {loginAction,logoutAction};