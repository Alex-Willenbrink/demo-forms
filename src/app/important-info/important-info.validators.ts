import { AbstractControl } from "@angular/forms";
import { UsersService } from "../users.service";
import { map } from "rxjs/operators";

export function PasswordMatchingValidator(group: AbstractControl): any {
  const { password, passwordConfirmation } = group.value;
  return password === passwordConfirmation
    ? null
    : { passwordMatchingError: true };
}

export class UniqueUsernameValidator {
  static createValidator(usersService: UsersService) {
    return (control: AbstractControl) => {
      return usersService.getUsers("username", control.value).pipe(
        map(users => {
          return users.length ? { uniqueUsernameError: true } : null;
        })
      );
    };
  }
}
