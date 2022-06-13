import { atom } from "recoil";

export const accidentsState=atom({
    key:"accidents-state",
    default:[{
      id:"",
      typeAccident:"",
      lieuAccident:"",
      description:""
    }]
  })
