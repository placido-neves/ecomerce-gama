import { BrowserRouter, Route } from "react-router-dom"


import { Home } from "./pages/Home"
import { CadClient } from "./pages/CadClient"
import { CardProd } from "./pages/CadProd"

import './styled.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/client" component={CadClient}></Route>
      <Route path="/produtos" component={CardProd}></Route>
    </BrowserRouter>
  )
}
export default App;
