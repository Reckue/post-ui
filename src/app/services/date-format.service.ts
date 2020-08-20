import {Injectable} from '@angular/core';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

@Injectable({
  providedIn: 'root',
})
export class DateFormatService {

  private static tryGetNow(timeAfterPublish) {
    if (timeAfterPublish < 10 * SECOND) {
      return 'Just now';
    }
  }

  private static tryGetLessOneMinute(timeAfterPublish) {
    if (timeAfterPublish < MINUTE) {
      return 'Less 1 minute ago';
    }
  }

  private static tryGetOneMinute(timeAfterPublish) {
    if (timeAfterPublish < (MINUTE * 2)) {
      return 'One minute ago';
    }
  }

  private static tryGetLessHour(timeAfterPublish) {
    if (timeAfterPublish < HOUR) {
      return Math.trunc(timeAfterPublish / MINUTE) + ' minutes ago';
    }
  }

  private static tryGetOneHour(timeAfterPublish) {
    if (timeAfterPublish < (HOUR * 2)) {
      return 'One hour ago';
    }
  }

  private static tryGetHours(timeAfterPublish) {
    if (timeAfterPublish < DAY) {
      return Math.trunc(timeAfterPublish / HOUR) + ' hours ago';
    }
  }

  private static tryGetYesterday(timeAfterPublish) {
    if (timeAfterPublish < (DAY * 2)) {
      return 'Yesterday';
    }
  }

  private static getDays(timeAfterPublish) {
    return Math.trunc(timeAfterPublish / DAY) + ' days ago';
  }

  public getTimeAfterPublish = (timestamp: number) => this.getTimeString(Date.now() - timestamp);

  private getTimeString = (timeAfterPublish) => (
      DateFormatService.tryGetNow(timeAfterPublish) ||
      DateFormatService.tryGetLessOneMinute(timeAfterPublish) ||
      DateFormatService.tryGetOneMinute(timeAfterPublish) ||
      DateFormatService.tryGetLessHour(timeAfterPublish) ||
      DateFormatService.tryGetOneHour(timeAfterPublish) ||
      DateFormatService.tryGetHours(timeAfterPublish) ||
      DateFormatService.tryGetYesterday(timeAfterPublish) ||
      DateFormatService.getDays(timeAfterPublish)
  )
}
