import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ApplicationFormPage = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const history = useHistory()


    const postApplyToTrip = (success) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/${id}/apply`
        const body = {
            name: name,
            age: age,
            applicationText:applicationText,
            profession: profession,
            country: country,
        }
        axios
        .post (url, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.data)
        })
    }
   

    const goBack = () =>{
        history.goBack()
    }

    return(
        <div>
            <h2>Inscrição para uma viagem incrível.</h2>
            <form>
                <select>
                    <option value disabled selected>Escolha uma Viagem</option>
                    <option></option>
                </select>
            <input type="number" placeholder="numero"></input>
            <input type="text" placeholder="Nome" required></input>
            <input type="text" placeholder="Idade" required></input>
            <input type="number" placeholder="numero"></input>
            <input type="text" placeholder="Texto de Candidatura" required></input>
            <input type="text" placeholder="Profissão" required></input>
            <select>
                    <option value disabled selected>Escolha um Pais</option>
                    <option onClick={goBack}>Voltar</option>
            </select>
            
            <button type="submit">Enviar</button>
            </form>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default ApplicationFormPage
