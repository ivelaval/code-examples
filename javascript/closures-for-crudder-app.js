const fetch = require('isomorphic-fetch');

const crudder = (domain) => (resource) => {
    const url = `${domain}/${resource}`;

    return ({
        create: (data) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(result => result.json()),
        get: () => fetch(url).then(result => result.json()),
    });
}

const base = crudder('https://jsonplaceholder.typicode.com');
const todos = base('todos');
const users = base('users');

todos.get().then(result => console.log(result));
users.get().then(result => console.log(result));
