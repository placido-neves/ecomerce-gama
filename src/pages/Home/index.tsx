import { Button } from "../../components/Button"
import { Cards } from "../../components/Products"
import { Google } from "../../components/Login"

import psg from "../../assets/psg.jpg"
import sp from "../../assets/sp.jpg"
import normal from "../../assets/normal.jpg"


import "./styled.scss"


export function Home() {
    return (
        <>
            <title>ShopYou</title>
            <div className="header">
                <div className="nav">
                    <a href="/">ShopYour</a>
                    <form>
                        <input type="text" name="" id="" />
                        <Button>seach</Button>
                    </form>
                </div>
            </div>
            <div className = "container">
                <div className="cad">
                    <p>Cadastre seu e-mail para receber promoções</p>
                    <div className="align-btn">
                        <Google></Google>
                    </div>
                    <form>
                        <label htmlFor="">email:</label>
                        <input type="text" placeholder = "exaple@exeaple.com"/>
                        <Button>send</Button>
                    </form>
                </div>
                <div className="main">
                    <div className="proucts-main">
                        <Cards title="Camisa do PSG" price="17.90" srcImg={psg}></Cards>
                        <Cards title="Camisa do Sao Paulo" price="25.90" srcImg={sp}></Cards>
                        <Cards title="Camisa do Normal" price="15.90" srcImg={normal}></Cards>
                    </div>
                </div>
            </div>
        </>
    )
}