export enum GENDER {
   MALE = "MALE",
   FEMALE = "FEMALE",
   OTHER = "OTHER"
}

export type character = {
   name: string,
   gender: GENDER,
   id?: number,
   description?: string
}


export class Character {

   private name: string;
   private gender: GENDER;
   private id?: number;
   private description?: string;

   constructor(
      name: string,
      gender: GENDER,
      id?: number,
      description?: string
   ) {
      this.name = name;
      this.gender = gender;
      this.id = id;
      this.description = description;
      console.log("Consegui criar "+this.name+" com sucesso!");
   }

   getName(): string{
      return this.name;
   }

   getGender(): GENDER{
      return this.gender;
   }

   getId(): number | undefined{
      return this.id;
   }

   getDescription(): string | undefined {
      return this.description;
   }

}

const wolverine = new Character("Logan", GENDER.MALE, 11, "Se cura rápido e tem garra de adamantium");






export class Dog {
   name: string;
   weight: number;

   constructor(name: string, weight: number) {
      this.name = name;
      this.weight = weight;

   }

   bark(): void {
      console.log(this.name)

   }

   eat(quantity: number): void {

   }

}

const cyclops: character = {
   name: "Scott Summers",
   gender: GENDER.MALE,
   description: "Solta raio vermelho",
   id: 10
}




