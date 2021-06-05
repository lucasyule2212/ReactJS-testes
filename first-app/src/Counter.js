import React, { useEffect, useState } from "react";

function Counter(props) {
  //criando componente react com Function(metodo novo)

  const [clicks, setClicks] = useState(0); //definindo os ESTADOS dos "atributos" e "métodos" desse estado/atributo e inicializando com "useState()"
  //metodo mais atual de lidar com os atributos dos componentes(React Hooks)!
  //useState = HOOK de ESTADOS!!!

  // const [meuEstado,setEstado]=useState() <--------EXEMPLO

  useEffect(() => {
    setClicks(parseInt(localStorage.getItem("clicks")));
  }, []); //usando dessa forma, ele nao observa nenhuma variável, em consequencia, apenas executa uma única vez,
  //sendo útil para carregar o localStorage em alguma variável por exemplo

  useEffect(() => {
    //metodo useEffect, vai ser utilizando quando o componente for criado/renderizado(equivalente ao didMount)
    document.title = clicks; //e também quando o componente for atualizado(equivalente ao didUpdate)
    console.log(clicks);
    localStorage.setItem("clicks", clicks);
    console.log(localStorage);
  }, [clicks]); // esse array passa para o useEffect qual variavel ele precisa observar

  function add() {
    setClicks(clicks + 1);
  }
  console.log(props.show);
if (props.show) {
    return (
        <div className="card w-25 m-2 p-2 d-flex" id="cardCounter">
          <h4 className="card-title">Counter: {clicks}</h4>
          <div className="d-flex flex-row justify-content-between">
            <button
              onClick={add}
              type="button"
              className="btn btn-outline-primary btn-sm w-25"
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm w-25 "
            >
              Destruir
            </button>
          </div>
        </div>
      );
}else{
    return(<div></div>)
}
 
}

/* class Counter extends React.Component {
  //criando componente react com Classes(metodo velho)
  constructor(props) {
    //metodo de ciclo de vida: constructor=> define os atributos da classe e herda os props do React
    super(props);
    this.state = {clicks:0};
    this.add = this.add.bind(this);
  }
  add() {
    //this.setState({ clicks: this.state.clicks + 1 });
    this.setState(
      (state) => {
        return { clicks: state.clicks + 1 };
      },() => {
        localStorage.setItem("state", JSON.stringify(this.state));
        console.log(localStorage.getItem("state"));
      }
    );
  }

  render() {
    //metodo render, renderiza/atualiza o componente na tela
    return (
      <div className="card w-25 m-2 p-2" id="cardCounter">
        <h4 className="card-title">Counter: {this.state.clicks}</h4>
        <button
          onClick={this.add}
          type="button"
          className="btn btn-outline-primary btn-sm w-25"
        >
          Add
        </button>
      </div>
    );
  }

  shouldComponentUpdate() {
    //metodo shouldComponentUpdate, permite ou nao o render/atualizaçao do componente na tela(visualmente)
    return true;
  }

  componentDidMount() {
      //metodo componentDidMount, permite aplicar modificaçoes ao componente apenas quando ele estiver sido completamente renderizado na tela
      this.setState(JSON.parse(localStorage.getItem("state")));
  }

  componentWillUnmount() {
      //metodo componentWillUnmount, vai ser chamado sempre que o componente vai ser retirado da página

  }
} */

export default Counter;
