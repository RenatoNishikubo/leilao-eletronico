import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.formulario = this.criarFormulario();
  }

  ngOnInit(): void {
  }

  public criarFormulario(): FormGroup {
    return this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
    });
  }
  onSubmit() {
    console.log(this.formulario.valid);
    // if (this.formulario) {
      // this.http.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
      //   .map(res => res)
      //   .subscribe(dados => {
        // this.resetar();
        // });
        this.resetar();
    }


  resetar() {
    this.formulario.reset();
  }


  // consultaCEP() {
  //   let cep = this.formulario.get('endereco.cep').value;

  //   cep = cep.replace(/\D/g, '');

  //   if (cep != '') {
  //     var validacep = /^[0-9]{8}$/;

  //     if (validacep.test(cep)) {
  //       this.resetaDadosForm();

  //       this.http.get(`//viacep.com.br//ws/${cep}/json`)
  //         // .map(dados => dados.json())
  //         .subscribe(dados => this.populaDadosForm(dados));

  //     }
  //   }
  // }
  // populaDadosForm(dados) {
  //   this.formulario.patchValue({
  //     endereco: {
  //       rua: null,
  //       complemento: null,
  //       bairro: null,
  //       cidade: null,
  //       estado: null,
  //     }
  //   });
  // }
  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }

}
