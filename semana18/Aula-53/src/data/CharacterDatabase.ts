import knex, { Knex } from "knex";
import { Character } from "../types";

export class CharacterDatabase {

    constructor(){

    }

    private connection: Knex = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_SCHEMA,
           port: 3306,
           multipleStatements: true
        }
     })

   async create(character: Character){

        await this.connection("character")
         .insert({
             name:character.getName(),
             gender: character.getGender(),
             description:character.getDescription()})
    }

    async getAll(): Promise<Character[]>{
        const characters = await this.connection("character").select();
        const charactersClass: Character[] = []; 
        for(let ch of characters){
            const c = new Character(ch.name, ch.gender, ch.id, ch.description);
            charactersClass.push(c);
        }

        return charactersClass;


    }
}