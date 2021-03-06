import { ButtonHTMLAttributes } from "react"
import "./styled.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <button className="button">
            {props.children}
        </button>


    )
}