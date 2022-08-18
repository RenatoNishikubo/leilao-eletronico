import { InterfaceService } from './../../../services/interface.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Car{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {


  public formOferta :FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: InterfaceService,
    ) { 
    this.formOferta = this.criarFormOferta()
  }

  ngOnInit():void {}

  public criarFormOferta():FormGroup{
    return this.fb.group({
      name:[null,[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      price:[null,[Validators.required]]
    })
  }
  onSubmit(){
    console.log(this.formOferta.value);
    
    if(this.formOferta.valid){
      this.service.create(this.formOferta.value).subscribe(
        success => console.log('sucesso'),
        error => console.log(error),
        () => console.log('request completo')
      );
    }
  }
  onCancel(){
    this.formOferta.reset();
  }

}
