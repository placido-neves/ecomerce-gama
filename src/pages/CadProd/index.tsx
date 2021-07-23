import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form, Field } from "formik"

import { Nav } from "../../components/Nav"

import "./styled.scss"


export function CardProd() {
    const history = useHistory()

    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [produto, setProduto] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [text, setText] = useState([""])

    function oS(ev:any) {
        let msg: string[] = []
        setText(msg)
        if(cep === "" || estado === "" || cidade === "" || rua === ""){
            msg.push("cep is invalid")
        }else if(numero === ""){
            msg.push("numero is invalid")
        }else if(produto === ""){
            msg.push("produto is invalid")
        }else if(preco === ""){
            msg.push("preco is invalid")
        }else {
            localStorage.setItem("produto", JSON.stringify( {
                "cep":cep,
                "estado":estado,
                "cidade":cidade,
                "rua":rua,
                "numero":numero,
                "produto":produto,
                "preco":preco,
                "descricao":descricao
            }))
            history.push("/")
        }
    }

    const getCep = (event: any, setFieldValue: any) => {
        const { value } = event.target
        const cep = value.replace("^[0-9]/g", "")


        const option: any = {
            method: "GET",
            mode: "cors",
            cache: "default"
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`, option).then(response => {
            response.json().then(data => {
                setFieldValue("cidade", data.localidade)
                setFieldValue("estado", data.uf)
                setFieldValue("rua", data.logradouro)
                setCep(cep)
                setEstado(data.uf)
                setCidade(data.localidade)
                setRua(data.logradouro)
            })
        }).catch(e => {
            setText(["Cep is invalid"])
        })

    }


    return (
        <>
            {text}
            <title>Cadastro Produtos</title>
            <Nav></Nav>
            <Formik
                initialValues={{
                    cep: "",
                    estado: "",
                    rua: ""

                }}
                onSubmit={oS}
                render={({ isValid, setFieldValue }) =>
                (
                    <Form onClick={(e) => { e.preventDefault() }}>
                        <div className="container-card">
                            <form>
                                <div className="container-end">
                                    <div>
                                        <label htmlFor="" >CEP:</label>
                                        <Field name="cep " type="text" onBlur={(ev: any) => getCep(ev, setFieldValue)}></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="">Estado:</label>
                                        <Field name="estado" type="text" ></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="">Cidade:</label>
                                        <Field name="cidade" type="text" ></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="">Rua:</label>
                                        <Field name="rua" type="text" ></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="">Numero:</label>
                                        <input type="text" name="" id="" value ={numero} onChange={ev =>{setNumero(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div className="container-prod">
                                    <div>
                                        <label htmlFor="">Produto:</label>
                                        <input type="text" name="" id="" value ={produto} onChange={ev =>{setProduto(ev.target.value)}}/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Preco:</label>
                                        <input type="text" name="" id="" value ={preco} onChange={ev =>{setPreco(ev.target.value)}}/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Decricao:</label>
                                        <textarea name="" id="" value ={descricao} onChange={ev =>{setDescricao(ev.target.value)}}></textarea>
                                    </div>
                                </div>
                                <div className="aling-btn">
                                    <button onClick={oS}>Salvar</button>
                                </div>

                            </form>
                        </div>
                    </Form>
                )}
            >
            </Formik>
        </>
    )
}