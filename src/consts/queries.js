import gql from "graphql-tag";
export const ACCIDENTS = gql`
query accidents{
    accidents{
        id
        typeAccident
        lieuAccident
        description
    }
}
`;

export const  LOGIN= gql`
    query login($nom:String!,$mdp:String!){
        login(nom:$nom,mdp:$mdp){
            id
            nom
        }
    }
`;




