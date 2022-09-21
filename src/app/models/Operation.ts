import { Account } from './account';
export interface Operation {
  accountNumber?: number,
  operationType: string,
  amount: number,
  operationDate?: Date
}
