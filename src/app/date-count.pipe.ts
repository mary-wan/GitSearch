import { Pipe} from '@angular/core';
import { TimeAgoPipe } from 'time-ago-pipe';

@Pipe({
  name: 'dateCount',
  pure: false
})
export class DateCountPipe extends TimeAgoPipe {

  transform(value: any): any {
    return super.transform(value);


  }  
      if (value: string | number | Date) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
       
        const intervals:any = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                   counter + ' ' + i + ' ago'; // singular 
                } else {
                  counter + ' ' + i + 's ago'; // plural (2 days ago)
                }
        }
    }

}
