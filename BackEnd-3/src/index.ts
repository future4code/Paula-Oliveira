import express, {Express} from "express"
import cors from "cors"
import {countries} from "./data"
import { country } from "./types";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/countries", (req, res) =>{
   const result = countries.map(country => ({
      id: country.id,
      name: country.name
    }))
    
    res
      .status(200)
      .send(result)
})

app.get("/countries/search", (req, res) =>{
   let result: country[] = countries

if (req.query.name) {
   result = result.filter(
      country => country.name.includes(req.query.name as string)
   )
}

if (req.query.capital) {
   result = result.filter(
      country => country.capital.includes(req.query.capital as string)
   )
}

if (req.query.continent) {
   result = result.filter(
      country => country.continent.includes(req.query.continent as string)
   )
}
})

app.get("/countries/:id", (req, res) =>{
   const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
   )
   
   if (result) {
      res.status(200).send(result)
   } else {
      res.status(404).send("Não encontrado")
   }
})

app.listen(3003, () => {
   console.log("Servidor pronto!")
})