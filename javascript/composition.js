const lodash = require('lodash');

const users = [
    { id: 1, name: 'Elias', lastName: 'Schurman' }
];

// const h = x => f(g(x));
const compose = (...fns) => initialValue => fns.reduce((accumulator, currentFn) => currentFn(accumulator), initialValue);

const getNameFullyWithoutComposition = (_users) => {
    const firstUser = _users[0];
    const capitalized = {
        name: lodash.upperFirst(firstUser.name),
        lastName: lodash.upperFirst(firstUser.lastName),
    };
    return `${capitalized.name} ${capitalized.lastName}`;
}

const getHeadPosition = x => x[0];

const capitalizeNames = userData => ({
    name: lodash.upperFirst(userData.name),
    lastName: lodash.upperFirst(userData.lastName),
});

const returnFullName = userData => `${userData.name} ${userData.lastName}`;

// tacit programming or point free
const getNameFully = compose(getHeadPosition, capitalizeNames, returnFullName);

const fullName = getNameFully(users);
console.log(fullName);

