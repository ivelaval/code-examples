import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

range(1, 5).pipe(
    map<number, number>(val => val * 10)
)
.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

const keyupKey$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);

keyupCode$.subscribe(code => console.log('map: ', code));
keyupKey$.subscribe(key => console.log('pluck: ', key));
