import { OperationService } from './../../services/operation.service';
import { Component, OnInit } from '@angular/core';
import { Operation } from './../../models/Operation';

// testing account is 123
const accountNumber: number = 123;

@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.css']
})
export class OperationsHistoryComponent implements OnInit {

  operations: Operation[] = [];

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.getAllOperations(accountNumber);
  }

  getAllOperations(accountNumber: number) {
    this.operationService.getAll(accountNumber)
      .subscribe(res => this.operations = res['_embedded']?.operationResourceList);
  }

  trackOperaion(index: any, operation: Operation) {
    return operation ? operation.operationId : undefined;
  }

}
