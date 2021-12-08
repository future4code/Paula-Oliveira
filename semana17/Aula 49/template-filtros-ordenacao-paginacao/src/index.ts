import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers} from "./endpoints/getAllUsers"
import { connection } from "./data/connection"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)

app.get("/users/:id", async (req, res) => {
   try{
     const result =  await connection.raw(`type`);
 
    res.status(200).send(result)
 } catch (error) {
    console.log(error.message)
    res.status(500).send("An unexpected error occurred")
 }
})

 

const server = app.listen(process.env.PORT || 3004, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
      console.log("Terminar: Ctrl+C");
   } else {
      console.error(`Failure upon starting server.`);
   }
})