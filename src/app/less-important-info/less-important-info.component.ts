import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

import { GreaterThanNineThousandValidator } from "./less-important-info.validators";
import { FormService } from "../form.service";

@Component({
  selector: "less-important-info",
  templateUrl: "./less-important-info.component.html",
  styleUrls: ["./less-important-info.component.css"]
})
export class LessImportantInfoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      strength: [9001, GreaterThanNineThousandValidator],
      speed: 0
    });

    this.formService.addForm("lessImportantInfo", this.form);
  }
}
