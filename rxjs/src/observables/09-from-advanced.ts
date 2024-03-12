import { of, from } from 'rxjs';

/*
* of: take a argument and generate a secuence
* from: take array, promise, object, iterable, observable 
*/

const observer = {
    next: val => console.log('[next]', val),
    complete: () => console.log('[complete]'),
}

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Ivan');

const myGenerator = function*()  {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

/*
for (let id of myIterable) {
    console.log(id);
}
*/

const source$ = from(myIterable);
source$.subscribe(observer);

// const source$ = from(fetch('https://api.github.com/users/ivelaval'));

/*
source$.subscribe(async (response) => {
    console.log(response.ok);
    const data = await response.json();
    console.log(data);
});
*/

// source$.subscribe(observer);
