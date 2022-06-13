import {client} from '../helpers/apollo';
import { LOGIN } from '../consts/queries';

export class LoginService {
  static login = async (nom: any,mdp:any) => {
    try {
      const result = await client.query({
        query: LOGIN,
        variables: {nom,mdp},
      });
      console.log(result);
      return result.data.login;
    } catch (e) {
      console.log(e);
    }
}
}

