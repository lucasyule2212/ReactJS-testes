import React from "react"; //IMPORT REACT
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // IMPORT REACT ROUTER (TRATA DAS ROTAS DO APP)

import "../index.scss";
import Home from "./Home";
import About from "./About";
import Docs from "./Docs";
import Contact from "./Contact";
import Nav from "./Nav";
import PrivateRoute from './PrivateRoute'
import AcessoNegado from "./AcessoNegado";
//IMPORT DOS COMPONENTES

import {Provider} from 'react-redux'
import loginReducer from '../reducers/loginReducer' //IMPORT REDUCER DO LOGIN
import {createStore} from 'redux'
//IMPORT REDUX E REACT REDUX

const store = createStore(loginReducer) //CRIANDO O STORE DO STATE "LOGIN"

function App(props) {

  return (
        <Provider store={store} >  {/*PASSANDO O STORE DO STATE "LOGIN" PARA TODOS OS COMPONENTES ACESSAREM*/}
        <Router> {/*GERENCIADOR DAS ROTAS*/}
        <Nav /> {/*NAVBAR*/}
        <div className="container-fluid my-4 w-75 align-self-center">
          <Switch> {/*GERENCIADOR DE ROTAS QUE PERMITE PEGAR A ROTA COMPLETAMENTE*/}
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/docs"> {/*ROTA PRIVADA, GERENCIADA POR UM STATE DE "LOGIN"*/}
              <Docs></Docs>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/negado"> {/*ROTA CASO O USUARIO TENTE ACESSAR A ROTA PRIVADA*/}
              <AcessoNegado></AcessoNegado>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*"> {/*ROTA GENÉRICA PARA TRATAR ROTAS INEXISTENTES*/}
              <div className="container-fluid">
                <h1 className="display-5">
                  Não encontrei o que voce procurou =/
                </h1>
              </div>
            </Route>
          </Switch>
          </div>
        </Router>
        </Provider>
     
  );
}
export default App;
