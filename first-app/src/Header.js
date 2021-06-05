import React from "react";
import Menu from "./Menu";

function Header(props) { //criando componente react com Function(metodo novo)
  return (              //props passado como param sao os parametros da tag criada em uma instancia superior, exemplo:class,id,href,arrayDeQualquerCoisa,etc
    <header className="navbar bg-dark px-5 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between  container-fluid">
      <h1>{props.name}</h1> 
     <Menu links={props.links}></Menu>  {/*menu foi um componente criado*/}
    </header>               
  );                        //obs componentes sempre podem passar props para os filhos, e os filhos sempre tem acesso
}                           //mas os filhos nao podem mandar dados para os pais!



export default Header;
