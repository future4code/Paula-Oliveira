import { v4 } from "uuid"

export class IdGenerated{

    generatedId = () => v4();
    
}