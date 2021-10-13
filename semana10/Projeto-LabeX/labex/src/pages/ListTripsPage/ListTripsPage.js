import React from "react";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToTripsApplication = () =>{
        history.push("/trips/application")
    }


    return(
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToTripsApplication}>Inscrição</button>
            
        </div>
    )
}

export default ListTripsPage