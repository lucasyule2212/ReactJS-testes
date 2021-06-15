import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthBtn from "./AuthBtn";

function Nav(props) {
  const login = useSelector(state=>state) //INSTANCIANDO O STORE DO STATE "LOGIN"
  const history = useHistory(); //MÉTODO ROUTER QUE PERMITE GERENCIAR O HISTÓRICO DE NAVEGAÇAO DO USUÁRIO NO APP
  const location = useLocation() //MÉTODO ROUTER QUE PERMITE PEGAR O ATUAL PATH DO USUÁRIO


  useEffect(()=>{ //GERENCIANDO O STATE "LOGIN" E REDIRECIONANDO:
    let {from}=location.state||{from:{pathname:'/'}}
    if (login) {
      history.replace(from)
    }
  },[login])

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link id="brand" className="navbar-brand text-white" to="/">
          ReactRouter
        </Link>
        <ul className="navbar-nav d-flex flex-row gap-5">
          <li className="navbar-item">
            <AuthBtn></AuthBtn>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link text-white">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link text-white" to="/docs">
              Docs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="nav-link text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
