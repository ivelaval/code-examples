import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const gretting = () => console.log('hello world');
const gretting2 = params => console.log(`hello ${params.name} ${params.lastName}`);

// asyncScheduler.schedule(gretting, 2000);
// asyncScheduler.schedule(gretting2, 2000, { name: 'Ivan', lastName: 'Avila'});

const subscription = asyncScheduler.schedule( function(state)  {
    console.log('[state]', state);
    this.schedule(state + 1, 1000);
}, 2000, 0);

/* setTimeout(() => {
    subscription.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() =>subscription.unsubscribe(), 6000);
