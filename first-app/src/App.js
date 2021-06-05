import "./App.css";
import  Header  from "./Header";
import Counter from "./Counter";


function App() {
let show=true;
  return(
    <>
    <Header name="Testes ReactJS" links={["Email","LinkedIn","GitHub"]}></Header>

    <Counter clicks="3" show={show}></Counter>
    </>
  ); 
 
}

export default App;
