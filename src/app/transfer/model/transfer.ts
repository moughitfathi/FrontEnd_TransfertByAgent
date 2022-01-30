import { Account } from 'src/app/account/model/account';
import { Client } from 'src/app/client/model/client';
import { TransfertMulttipleBeneficiare } from './TransfertMulttipleBeneficiare';

export class Transfer {
  id: number;
  dateCreation: Date;
  dateExecution: Date;
  mentant: number;
  compte: Account;
  client: Client;
  nombreDeBeneficiare: number;
  status: string;
  transfertMulttipleBeneficiare: TransfertMulttipleBeneficiare;



}
