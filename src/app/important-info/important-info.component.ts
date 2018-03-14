import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { UsersService } from "../users.service";
import { FormService } from "../form.service";
import {
  UniqueUsernameValidator,
  PasswordMatchingValidator
} from "./important-info.validators";
import swal from "sweetalert2";

@Component({
  selector: "important-info",
  templateUrl: "./important-info.component.html",
  styleUrls: ["./important-info.component.css"]
})
export class ImportantInfoComponent implements OnInit {
  form: FormGroup;
  frontEndFrameworks: string[] = ["Angular", "React", "Vue", "Other"];

  constructor(
    private usersService: UsersService,
    private formService: FormService
  ) {
    this.form = new FormGroup(
      {
        username: new FormControl(
          "",
          Validators.required,
          UniqueUsernameValidator.createValidator(this.usersService)
        ),
        password: new FormControl("", Validators.required),
        passwordConfirmation: new FormControl("", Validators.required),
        frontEndFramework: new FormControl("Angular")
      },
      PasswordMatchingValidator
    );

    this.formService.addForm("importantInfo", this.form);
  }

  ngOnInit() {
    this.form.get("frontEndFramework").valueChanges.subscribe(value => {
      if (value !== "Angular") {
        swal("Are you sure?", `${value} is kind of lame...`, "warning");
      }
    });
  }
}
