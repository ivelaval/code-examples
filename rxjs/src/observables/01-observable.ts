import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`[Next]: ${value}`),
    error: error => console.error(`[Error]: ${error}`),
    complete: () => console.info(`[Complete]`),
};

// const observable$ = Observable.create();
const observable$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // const a = undefined;
    // a.name = 'ivan';

    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

observable$.subscribe(observer);

/*observable$.subscribe(
    value => console.log(`Next: ${value}`),
    error => console.error(`Next: ${error}`),
    () => console.info('Has completed'),
);*/
