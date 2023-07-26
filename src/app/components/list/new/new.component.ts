import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankElement } from 'src/app/models/BankElement';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  element!: BankElement;
  isChange!: boolean;
  colorControl = new FormControl('accent ' as ThemePalette);

  constructor(@Inject(MAT_DIALOG_DATA) public data: BankElement, public dialogRef: MatDialogRef<NewComponent>,
  ) {

  }

  ngOnInit(): void {
    if (this.data.CodigoSicap != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  OnCancel(): void {
    this.dialogRef.close();
  }
}
