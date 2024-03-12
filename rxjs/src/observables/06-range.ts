import { range, asyncScheduler } from 'rxjs';

const src$ = range(1, 100, asyncScheduler);

console.log('begin');
src$.subscribe(console.log)
console.log('end');
