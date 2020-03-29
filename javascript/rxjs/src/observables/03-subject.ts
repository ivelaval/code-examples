import { Observable, Subscriber, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`[Next]: ${value}`),
    error: error => console.error(`[Error]: ${error}`),
    complete: () => console.info(`[Complete]`),
};

const interval$ = new Observable(subscriber => {

    const interval = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(interval);
        console.info('Interval destroyed');
    }

});

const subject$ = new Subject();
const susbcription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe(rdm => console.log('subs1', rdm));
// const subs2 = interval$.subscribe(rdm => console.log('subs2', rdm));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    susbcription.unsubscribe();
}, 3500);
