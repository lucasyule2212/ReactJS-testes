import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'

// import { Container } from './styles';

function PrivateRoute({children,...rest}) {
const login = useSelector(state=>state);
return(
 <Route {...rest}
    
 render={({location})=>
    login?(children):(<Redirect to={{pathname:'/negado',state:{from:location} }}></Redirect>) //COMPONENTE REDIRECT, REDIRECIONA PARA UM DETERMINADO PATH, APÓS UMA AÇAO
 } //NO CASO A AÇAO É: CHECAR SE O USUÁRIO ESTÁ LOGADO
 //SE SIM, ENTAO O ROUTE VAI RENDERIZAR OS COMPONENTES "CHILDREN" DESDE COMPONENTE
 //SE NAO, O ROUTE VAI REDIRECIONAR PARA UM PATH QUE ESTÁ LIGADO A UM COMPONENTE DE ACESSO NEGADO
 
 >

 </Route>
);
}

export default PrivateRoute;