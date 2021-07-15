

import { AuthContextProvider } from "./context/AuthContext"
import {Home} from "./pages/Home"

import './styled.scss'

function App() {
  return (
      <AuthContextProvider>
        <Home/>
      </AuthContextProvider>
   
  )
}
export default App;
