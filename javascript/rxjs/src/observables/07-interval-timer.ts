import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('[next]', val),
    complete: () => console.log('[complete]'),
}

const today = new Date();
today.setSeconds(today.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(5000, 1000);
const timer$ = timer(today);

// interval$.subscribe(observer);
timer$.subscribe(observer);
