import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { GenderType, DocumentType } from "./types";

@Injectable({
    providedIn: 'root',
})

export class ValidatorsService {

    confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
        return control.value.password === control.value.confirmPassword
            ? null
            : { PasswordNoMatch: true };
    };

    confirmEmailValidator(control: AbstractControl): ValidationErrors | null {
        return control.value.email === control.value.confirmEmail
            ? null
            : { EmailNoMatch: true };
    };

    confirmGenderType(control: AbstractControl): ValidationErrors | null {
        return Object.values(GenderType)?.includes(control.value.gender)
            ? null
            : { GenderTypeError: true };
    }

    confirmDocumentType(control: AbstractControl): ValidationErrors | null {
        return Object.values(DocumentType)?.includes(control.value.documentType)
            ? null
            : { DocumentTypeError: true };
    }
}