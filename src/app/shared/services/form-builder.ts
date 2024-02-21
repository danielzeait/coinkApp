import { Injectable, inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GenderType } from "./types";
import { ValidatorsService } from "./validators";

@Injectable({
    providedIn: 'root',
})

export class FormBuilderService {

    private validators: ValidatorsService = inject(ValidatorsService);

    public registerForm: FormGroup = new FormGroup({
        documentType: new FormControl<DocumentType | null>(null, [Validators.required]),
        documentNumber: new FormControl<number | null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(11)]),
        documentExpedition: new FormControl<Date | string | null>(null, [Validators.required]),
        birthDate: new FormControl<Date | string | null>(null, [Validators.required]),
        gender: new FormControl<GenderType | null>(null, [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        confirmEmail: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
    },
        {
            validators: [
                this.validators.confirmPasswordValidator,
                this.validators.confirmEmailValidator,
                this.validators.confirmGenderType,
                this.validators.confirmDocumentType,
            ]
        }
    );

    public termsAndConditionsForm: FormGroup = new FormGroup({
        isAgree: new FormControl<boolean>(false, [Validators.required]),
    })

    getRegisterForm() {
        return this.registerForm;
    }

    getTermsAndConditionsForm() {
        return this.termsAndConditionsForm;
    }

}