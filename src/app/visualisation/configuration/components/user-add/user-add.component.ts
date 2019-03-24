import { UserModel } from './../../../../models/user-model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  form: FormGroup;

  user = new UserModel();
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
      // the rest of inputs with the same approach
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.dataService.createUser(this.user.firstName, this.user.lastName).subscribe();
    console.log(JSON.stringify(this.user));
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched)
    );
  }


}
