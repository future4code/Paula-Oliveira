import React from "react";
import { useHistory } from "react-router-dom";

const AdminHomePage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goLogout = () => {
        history.replace("/login")
    }
    return(
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goLogout}>Logout</button>
        </div>
    )
}

export default AdminHomePage;