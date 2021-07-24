import { BrowserRouter, Route } from "react-router-dom"


import { Home } from "./pages/Home"
import { CadClient } from "./pages/CadClient"
import { CardProd } from "./pages/CadProd"
import { Produto } from "./pages/Produto"

import './styled.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/cadclient" component={CadClient}></Route>
      <Route path="/cadproduto" component={CardProd}></Route>
      <Route path = "/produtos" component = {Produto}></Route>
    </BrowserRouter>
  )
}
export default App;
