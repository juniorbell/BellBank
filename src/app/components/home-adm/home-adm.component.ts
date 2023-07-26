import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { BankElement } from 'src/app/models/BankElement';
import { BankElementService } from 'src/app/services/auth/bankElement.service';
import { DetailsComponent } from '../details/details.component';
import { NewComponent } from '../list/new/new.component';



@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css'],
  providers: [BankElementService]
})
export class HomeAdmComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['codigosicap', 'nome', 'praca', 'pais', 'action'];
  dataSource!: BankElement[];

  constructor(public dialog: MatDialog, public BankElementService: BankElementService, private confirService: NgConfirmService,) {
    this.BankElementService.getElements().subscribe((data: BankElement[]) => {
      this.dataSource = data;
    });
  }



  ngOnInit(): void {
  }

  openDialog(element: BankElement | null): void {
    const dialogRef = this.dialog.open(NewComponent, {
      data: element === null ? {
        CodigoSicap: '',
        Nome: '',
        Praca: '',
        Pais: ''
      } : {
        CodigoSicap: element.CodigoSicap,
        name: element.Nome,
        Praca: element.Praca,
        Pais: element.Pais
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map(p => p.CodigoSicap).includes(result.CodigoSicap)) {
          this.dataSource[result.codigoscicap - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }
  openDetails() {
    const dialogRef = this.dialog.open(DetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editElement(element: BankElement): void {
    this.openDialog(element);
  }
  deleteElement(CodigoSicap: string): void {
    this.confirService.showConfirm("Tem certeza que deseja excluir item?",
      () => {
        this.dataSource = this.dataSource.filter(p => p.CodigoSicap !== CodigoSicap);
      },
      () => {
        alert("Operação cancelada!")
      })
  }
}



