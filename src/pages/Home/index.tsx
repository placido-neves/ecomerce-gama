import { useHistory } from "react-router-dom"

import { Button } from "../../components/Button"
import { Cards } from "../../components/Products"
import { useAuth } from "../../hook/useAuth"

import psg from "../../assets/psg.jpg"
import sp from "../../assets/sp.jpg"
import normal from "../../assets/normal.jpg"
import googleIcon from "../../assets/google-icon.svg"

import "./styled.scss"


export function Home() {
    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();

    async function handleSignWithGoogle() {
        if (!user) {
            await signInWithGoogle();

        }
        history.push("/enter")
    }

    return (
        <>
            <div className="header">
                <div className="nav">
                    <a href="/">ShopYour</a>
                    <form>
                        <input type="text" name="" id="" />
                        <Button>seach</Button>
                    </form>
                </div>
            </div>
            <div className="proucts-main">
                <Cards title="Camisa do PSG" price="17.90" srcImg={psg}></Cards>
                <Cards title="Camisa do Sao Paulo" price="25.90" srcImg={sp}></Cards>
                <Cards title="Camisa do Normal" price="15.90" srcImg={normal}></Cards>
            </div>
            <p>Cadastre seu e-mail para receber promoções</p>   
            <div className = "btn-aling">
                <button className="btn-google" onClick={handleSignWithGoogle}>
                    <img src={googleIcon} alt="" />
                    login with google
                </button>
            </div>
        </>
    )
}