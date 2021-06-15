import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {loginAction,logoutAction} from'../actions/login' //IMPORT DAS ACTIONS DO LOGIN, PARA ATIVAR ATRAVÉS DOS BUTTONS
// import { Container } from './styles';

function AuthBtn(props) {
    const login = useSelector(state=>state); //INSTANCIANDO O STORE DO STATE "LOGIN"
    const dispatch = useDispatch(); //INSTANCIANDO O DISPATCH, QUE VAI LEVAR AS ACTIONS ATIVADAS PARA OS REDUCERS 

    if (login) {
        return(
            <button className="btn btn-warning" onClick={()=>{dispatch(logoutAction())}}>
                Logout
            </button>
        );
    }else{
        return(
            <button className="btn btn-warning" onClick={()=>{dispatch(loginAction())}}>
                Login
            </button>
        );
    }
}

export default AuthBtn;