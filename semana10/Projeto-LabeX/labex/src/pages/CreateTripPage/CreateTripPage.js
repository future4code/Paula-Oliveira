import React from "react";
import { useHistory } from "react-router-dom";


const CreateTripPage = () => {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(<div>
           <h2>Criar Viagem</h2>
           <form>
           <input placeholder="Nome"/>
            <select> 
                <option>Esolha um planeta</option>
            </select>
            <input placeholder="dd/mm/aaaa"/>
            <input placeholder="Descrição"/>
            <input placeholder="Duração em dias"/>
            <button>Criar</button>
            </form>
            <button onClick={goBack}>Voltar</button>
           
        </div>
    )
}

export default CreateTripPage