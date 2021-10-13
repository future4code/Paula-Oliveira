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
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdminTripsList}>Login</button>
        </div>
    )
}

export default LoginPage;