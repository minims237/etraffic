import gql from "graphql-tag";
export const NEWACCIDENT= gql`
  mutation newAccident(
    $typeAccident: String!
    $lieuAccident: String!
    $description:String
  ) {
    newAccident(
      typeAccident: $typeAccident
      lieuAccident: $lieuAccident
      description:$description

    ) {
   description
    }
  }
`;


export const NEWPOSTE = gql`
  mutation newPoste(
       $nom:String!
        $mdp:String!
  ) {
    newPoste(nom:$nom,mdp:$mdp){
      nom
    }
  }
`;

