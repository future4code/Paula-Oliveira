import React from "react";
import { useHistory } from "react-router";

const TripDetailsPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <div>
            <p> TripDetailsPage0</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage