import { Account } from './account';
export interface Operation {
  operationId?: number,
  accountNumber?: number,
  operationType: string,
  amount: number,
  operationDate?: Date
}
