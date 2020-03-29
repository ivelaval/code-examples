import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`[Next]: ${value}`),
    error: error => console.error(`[Error]: ${error}`),
    complete: () => console.info(`[Complete]`),
};

const interval$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.info('Interval destroyed');
    }
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
}, 3000);
