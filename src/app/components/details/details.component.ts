import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankElement } from './../../models/BankElement';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent {
  element!: BankElement;
  displayedColumns: string[] = ['CodigoSicap', 'Nome', 'Praca', 'Pais', 'action'];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BankElement,
    public dialogRef: MatDialogRef<DetailsComponent>,

  ) {

  }
  close() {

  }
}
