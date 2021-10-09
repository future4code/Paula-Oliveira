import React, {useState, useEffect} from "react";
import {ContainerList} from "./styled"
import axios from "axios";


const TelaListaMatches = (props) =>{

    const [matchPerson, setMatchPerson] = useState([])

    const getMatches = () => {
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/matches`
        )
        .then((res) => {
          console.log(res.data);
          setMatchPerson(res.data.matches);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    useEffect(() => {
      getMatches()
    }, []);

    const putClearMatches = () => {
        axios
          .put(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/clear`
          )
          .then((res) => {
            console.log(res.data);
            setMatchPerson([])
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
   
        const pageList = matchPerson.map((match) => {
            return<ContainerList>
              <img src={match.photo}/>
              <p>{match.name}</p>
              </ContainerList>
          })

    return(
       <div>
          <button onClick={() => props.changePage("0")}>Home</button>
          <h3>Lista de Matches</h3>
         <div> {pageList}  <button onClick={putClearMatches}>clear</button> </div>

       
               
   
    </div>
        
    )
}

export default TelaListaMatches