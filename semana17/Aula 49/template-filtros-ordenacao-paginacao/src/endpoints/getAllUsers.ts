import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

//Exercício 1, 2 e 3

// export const getAllUsers = async(
//    req: Request,
//    res: Response
//    ): Promise<void> =>{
//    try {

//       const name = req.query.name || "%"
//       const sort = req.query.sort === "name" ? "name" : "type"
//       const order = req.query.order || "ASC" ? "ASC" : "email"
//       const page = Number(req.query.page) || 1
//       const size = Number(req.query.page) || 5
//       const offset = size * (page -1)

//       const users = await connection("aula49_exercicio")
//          .where("email", "LIKE", `%${name}%`)
//          .orderBy(sort, order)
//          .limit(5)
//          .offset(offset)
         
//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No users found")
//       }

//       res.status(200).send(users)
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

export const getAllUsers = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {

      const name = req.query.name || "%"
      const sort = req.query.sort === "name" ? "name" : "type"
      const order = req.query.order || "DESC" ? "DESC" : "name"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.page) || 5
      const offset = size * (page -1)

      const users = await connection("aula49_exercicio")
         .where("email", "LIKE", `%${name}%`)
         .orderBy(sort, order)
         .limit(5)
         .offset(offset)
         
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}




export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
   `)


   return result[0]
}


const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}