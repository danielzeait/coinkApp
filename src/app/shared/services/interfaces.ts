import { DocumentType, GenderType } from "./types";

export interface Key {
    keyType: string;
    value: number;
}

export interface Documents {
    description: string
    id: number
    notation: string
}

export interface Genders {
    description: string
    id: number
    name: string
}

export interface UserInterface {
    birthDate: string | Date,
    confirmEmail: string,
    confirmPassword: string,
    documentExpedition: string | Date,
    documentNumber: string | number,
    documentType: string | DocumentType,
    phoneNumber: string | number,
    email: string,
    gender: string | GenderType,
    password: string
}