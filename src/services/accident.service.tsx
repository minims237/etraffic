import { ACCIDENTS } from "../consts/queries"
import { client } from "../helpers/apollo"


        export class AccidentsService {
            static accidents=async()=>{
                try {
                    const result=await client.query({
                        query:ACCIDENTS,
                    });
                    console.log("resulta:",result);
                    return result.data.accidents;
                } catch (e) {
                    console.log(e)
                }
            }
             
            }

            
   