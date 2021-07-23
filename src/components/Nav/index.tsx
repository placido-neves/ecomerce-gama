import { Button } from "../../components/Button"

import "./styled.scss"

export function Nav() {
    return (
        <div className="header">
            <div className="nav">
                <a href="/">ShopYour</a>
                <form>
                    <input type="text" name="" id="" />
                    <Button>seach</Button>
                </form>
            </div>
        </div>


    )
}