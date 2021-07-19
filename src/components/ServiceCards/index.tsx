import { ReactNode } from "react"

import "./styled.scss"

interface Childrem {
    children?: ReactNode
}

export function ServiceCards(childrem: Childrem) {

    return (
        <div className="content">
            <div className="card-services">
                {childrem.children}

            </div>
        </div>

    )
}

export function TitleCards(childrem: Childrem) {

    return (
        <div className="title">
            <h3>
                {childrem.children}
            </h3>
        </div>
    )
}

export function BodyCards(childrem: Childrem) {

    return (
        <div className="body-services">
            <p>
                {childrem.children}
            </p>
        </div>
    )
}