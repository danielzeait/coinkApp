import { Injectable } from "@angular/core";
import { format, parseISO } from "date-fns";

@Injectable({
  providedIn: 'root',
})

export class UtilsService {

  transformDate(date: string, formatType: string): string {
    return format(parseISO(date), formatType);
  }

  getMaxDate() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const validYear = currentYear - 18;
    const validDate = new Date(validYear, today.getMonth(), today.getDate());
    return validDate.toISOString();
  }

  getMinDate() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const validYear = currentYear - 100;
    const validDate = new Date(validYear, today.getMonth(), today.getDate());
    return validDate.toISOString();
  }

  getTodayDate() {
    return new Date().toISOString();
  }

}