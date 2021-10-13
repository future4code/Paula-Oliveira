import React from "react";
import { useHistory } from "react-router-dom";

const CreateTripPage = () => {
    
    const history = useHistory()

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
            <button>Voltar</button>
           
        </div>
    )
}

export default CreateTripPage