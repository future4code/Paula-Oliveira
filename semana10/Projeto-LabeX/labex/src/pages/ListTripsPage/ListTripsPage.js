import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const ListTripsPage = () => {
    const [listTrips, setListTrips] = useState([])
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToTripsApplication = () => {
        history.push("/trips/application")
    }

    const getTrips = () => {
        axios
        .get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips`)
        .then((res) => {
            console.log(res.data)
            setListTrips(res.data.trips)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

        const listsTrips = listTrips.map((data) => {
            return<div>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>{data.planet}</p>
                <p> {data.durationInDays}</p>
                <p> {data.date} </p>
            </div>
        })

    return(
        <div>
            
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToTripsApplication}>Inscrição</button>
            <h1>Lista de Viagens</h1>
            {listsTrips}
        </div>
    )
}

export default ListTripsPage