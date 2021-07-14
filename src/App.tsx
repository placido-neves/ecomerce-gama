import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from "./context/AuthContext"
import {Home} from "./pages/Home"

import './styled.scss'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path ="/" exact component = {Home} ></Route>
          <Route path ="/carrinho" component = {Home} ></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
export default App;
