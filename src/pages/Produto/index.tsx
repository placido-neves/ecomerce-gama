import { Nav } from "../../components/Nav"

import "./styled.scss"

export function Produto() {
    function prod() {
        let product = localStorage.getItem("produto")
        if (product !== null) {
            let { cep, estado, cidade, rua, numero, produto, preco, descricao }: any = JSON.parse(product)
            return { cep, estado, cidade, rua, numero, produto, preco, descricao }

        }
        return null
    }


    return (
        <>
            <title>Produtos</title>
            <Nav></Nav>
            {prod() === null ? (
                <>
                    <div className="container">
                        <div className = "nada">
                            <p>Nao existe Produtos!!!!!</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="container">
                        <div className="item">
                            <div className="descricao">
                                <div className="prod-descr">
                                    <h3>{prod()?.produto}</h3>
                                    <p>{prod()?.descricao}</p>
                                </div>
                                <p>{prod()?.cidade} {prod()?.estado} {prod()?.rua}</p>
                            </div>

                            <p>{prod()?.preco}</p>

                        </div>
                    </div>

                </>)
            }
        </>
    )
}