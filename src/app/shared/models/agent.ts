export class Agent {
  id: number;
  titre: string;
  nom: string;
  prenom: string;
  profession: string;
  nationalite: string;
  cin: string;
  typeCin: string;
  adresse: string;
  tel: string;
  dateNaissance: Date;
  soldeAgent:number;
  email: string;
  pointdevente: {
    id: number;
    nom: string;
    ville: string;
    adresse: string;
    email: string;
    tel:string;
  };
  username: string;
  password: string;
}
