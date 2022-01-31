import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferEspece } from '../../model/transferEspece';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TransferEspeceService } from '../../service/transferEspece.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account/model/account';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transferByStatus.component.html',
  styleUrls: ['./transferByStatus.component.css'],
})
export class TransferByStatus implements OnInit {
  status: string;
  
  
  //transfers
  TRANSFERS!: TransferEspece[];
  dataSource = new MatTableDataSource<TransferEspece>(this.TRANSFERS);
  displayedColumns: string[] = [
    'dateCreation',
    'mentant',
    'nombreDeBeneficiare',
    'status',
    'client',
    'actions',
    
   
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private transferService: TransferEspeceService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.status = this.route.snapshot.params['status'];

  }

  ngOnInit(): void {
    //transfer
    this.transferService.findByStatus(this.status).subscribe(
      (data) => {
        this.TRANSFERS = data;

        this.dataSource = new MatTableDataSource<TransferEspece>(this.TRANSFERS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.dataSource = new MatTableDataSource<TransferEspece>(null);
      }
    );
  }
  checkSender(name: string) {
    if (sessionStorage.getItem('name') === name) {
      return true;
    }
    {
      return false;
    }
  }
  openConfirmation(id :number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous confirmer virement ' + '?',
        idVir : id ,
        
      },
    });



  }
}
