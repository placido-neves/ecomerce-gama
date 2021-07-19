import { Button } from "../../components/Button"
import { Cards } from "../../components/Products"
import { Google } from "../../components/Login"
import { ServiceCards, TitleCards, BodyCards } from "../../components/ServiceCards"

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
            <div className="container">
                <div className="cad">
                    <p>Cadastre seu e-mail para receber promoções</p>
                    <div className="align-btn">
                        <Google></Google>
                    </div>
                    <form>
                        <label htmlFor="">email:</label>
                        <input type="text" placeholder="exaple@exeaple.com" />
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
            <div className="nossos">
                Nossos Serviços
            </div>
            <div className="services">

                <ServiceCards>
                    <TitleCards>Lorem Ipsum</TitleCards>
                    <BodyCards>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </BodyCards>
                </ServiceCards>

                <ServiceCards>
                    <TitleCards>Lorem Ipsum</TitleCards>
                    <BodyCards>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </BodyCards>
                </ServiceCards>

                <ServiceCards>
                    <TitleCards>Lorem Ipsum</TitleCards>
                    <BodyCards>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </BodyCards>
                </ServiceCards>
            </div>

            <div className="footer">
                <div className="padding-footer">
                    <div className="top-footer">
                        <div className="redes-sociais">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <div className="telefone-email">
                            <i className="fas fa-phone-alt"></i>TELEFONE: (99)99999-9999
                            <i className="far fa-envelope"></i>EMAIL: email@email.com
                        </div>
                    </div>
                </div>
                <div className="bottom-footer ">
                    ShopYou RECIFE-PE - Desenvolvido por Placido Neves Ferreira Filho
                </div>
            </div>
        </>
    )
}