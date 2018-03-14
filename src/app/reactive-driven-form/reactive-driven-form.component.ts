import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { FormService } from "../form.service";
import { UsersService } from "../users.service";
import swal from "sweetalert2";

@Component({
  selector: "reactive-driven-form",
  templateUrl: "./reactive-driven-form.component.html",
  styleUrls: ["./reactive-driven-form.component.css"]
})
export class ReactiveDrivenFormComponent {
  constructor(
    private formService: FormService,
    private usersService: UsersService
  ) {}

  getFormValue() {
    return this.formService.value;
  }

  postUser() {
    if (!this.formService.valid) {
      this.formService.markAllAsDirty();
      swal("Oops...", "Please check all errors", "error");
      return;
    }
    const {
      username,
      password,
      frontEndFramework
    } = this.formService.value.importantInfo;
    this.usersService
      .postUser({
        username,
        password,
        favoriteFrontEndFramework: frontEndFramework
      })
      .subscribe(
        value => {
          swal(
            "Great work!",
            `User '${username}' has successfully registered`,
            "success"
          );
          this.formService.reset();
        },
        error => {
          console.error(error);
          swal("Oops...", "Registration failure", "error");
        }
      );
  }
}
