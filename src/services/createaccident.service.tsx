import { NEWACCIDENT } from "../consts/mutation"
import { client } from "../helpers/apollo"

export class CreateAccidentService{
    static newAccident=async ( typeAccident: any,lieuAccident: any,description: any)=>{
        try {
            const result=await client.mutate({
                mutation:NEWACCIDENT,
                variables:{ typeAccident,lieuAccident,description}
            })
            return result.data.newAccident
        } catch (e) {
            console.log(e)
        }
    }
    }

