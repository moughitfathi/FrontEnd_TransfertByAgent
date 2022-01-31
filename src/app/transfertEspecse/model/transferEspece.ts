import { Account } from 'src/app/account/model/account';
import { Client } from 'src/app/client/model/client';
import { TransfertEspeceMulttipleBeneficiare } from './TransfertEspeceMulttipleBeneficiare';

export class TransferEspece {
  id: number;
  dateCreation: Date;
  dateExecution: Date;
  mentant: number;
  compte: Account;
  client: Client;
  nombreDeBeneficiare: number;
  status: string;
  transfertMulttipleBeneficiare: TransfertEspeceMulttipleBeneficiare;



}
