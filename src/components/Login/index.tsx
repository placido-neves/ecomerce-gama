import { GoogleLogin, } from "react-google-login";

import googleIcon from "../../assets/google-icon.svg"

import "./styled.scss"

export function Google() {
    const responseGoogle = (res: any) => {
        console.log(res)
    }
   
    return (<div>
        <GoogleLogin
            clientId="610789220142-3ep6u12lrhgl9opsrtlve3emmc6o9db9.apps.googleusercontent.com"
            render={renderProps => (
                < div className="btn-aling" >
                    <button className="btn-google" onClick = {renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={googleIcon} alt="" />
                        login with google
                    </button>
                </div >
            )}
        buttonText = "login with google"
        onSuccess = {responseGoogle}
        onFailure ={responseGoogle}
        className = "btn-google "
        ></GoogleLogin>
    </div >)
}