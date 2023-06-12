import { Injectable } from '@angular/core';
import { DateTime } from "luxon";

@Injectable()
export class FormatDateService {

  run(date: string, pattern: string): string {
    return DateTime.fromISO(date).toFormat(pattern);
  }
}