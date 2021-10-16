import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToAdminTripsList = () => {
        history.push("/admin/trips/list")
    }


    return(
        <div>
            <p>LoginPage</p>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button onClick={goToAdminTripsList}>Login</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default LoginPage;