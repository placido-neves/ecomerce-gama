import { FormEvent,useState } from "react"
import { useHistory } from "react-router-dom"

import { Nav } from "../../components/Nav"

import "./styled.scss"

export function CadClient() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState([""])

    function saveData(event:FormEvent) {
        event.preventDefault()
        let msg: string[] = []
        setText(msg)

        if (name === "") {
            msg.push(`name is invalid`)
            
        } else if (password === "") {
            msg.push(`password is invalid`)
        } else if (email === "") {
            msg.push(`email is invalid`)
        } else {
            
            localStorage.setItem("user", JSON.stringify( {
                "name": name,
                "password": password,
                "email": email
            }))
            history.push("/")
        }
    }

    return (
        <>
            <title>Cadastro de Clientes</title>
            <Nav></Nav>
            {text}
            <div className="container-cad">
                <form onSubmit={saveData}>
                    <div className="nome">
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="" id="" value={name} onChange={event => setName(event.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="">Senha:</label>
                        <input type="password" name="" id="" value={password} onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div className="email">
                        <label htmlFor="">Email:</label>
                        <input type="email" name="" id="" value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="aling-btn">
                        <button><strong> Salvar</strong></button>
                    </div>
                </form>

            </div>
        </>
    )
}