import "./styled.scss"

type CardProps = {
    title: string;
    srcImg: string;
    price: string
}
export function Cards({ title, srcImg, price }: CardProps) {
    

    return (
        <>
            <div className="content">
                <div className="card">
                    <div className="top-card">
                        <h2>{title}</h2>
                    </div>
                    <div className="media-card">
                        <img src={srcImg} alt="" />
                        <figcaption className = "promocao">promoção</figcaption>
                    </div>
                    <div className="bottom-card">
                        <p className="bootom-text">R$: {price}</p>
                        <div className="actions-card">
                            <button className="actions">Add Card</button>
                            <button className="actions">Visualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}