import { Pipe, PipeTransform } from '@angular/core';

import { DateTime } from 'luxon';

@Pipe({
  name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {

  public transform(value: string, ...args: any[]): string | null {
    const earlier = DateTime.fromISO(value);
    const duration = earlier.toRelative()
    return duration;
  }
}