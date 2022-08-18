import { Observable } from 'rxjs';
import { Produtos } from './../../../interfaces/produtos';
import { InterfaceService } from './../../../services/interface.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leilao',
  templateUrl: './leilao.component.html',
  styleUrls: ['./leilao.component.scss']
})
export class LeilaoComponent implements OnInit {

  produtos: Produtos[] = [];
  // displayedColumns: string[] = ['position', 'name',];
  // dataSource = this.produtos;

  constructor(
    private service: InterfaceService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(){
    this.service.list()
    .subscribe(dados => this.produtos = dados);

  }

}




