import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form!: FormGroup;
  cls = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    })
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/forgot', this.form?.getRawValue())
      .subscribe(() => {
        this.cls = "Success";
        this.message = "Email was sent!!";
      });
    () => {
      this.cls = "Danger";
      this.message = "Email does not exist!!"
    }
  }

}
