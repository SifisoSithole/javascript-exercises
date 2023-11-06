const findTheOldest = function(people) {
    if (people.legth === 0) return {};
    if (people.legth === 1) return people[0];
    if (people[0].hasOwnProperty('yearOfDeath')){
        people[0].age = people[0].yearOfDeath - people[0].yearOfBirth;
    } else {
        people[0].age = new Date().getFullYear() - people[0].yearOfBirth;
    }
    result = people.reduce((oldestPerson, person) => {
        let currentPersonAge;
        if (person.hasOwnProperty('yearOfDeath')){
            currentPersonAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentPersonAge = new Date().getFullYear() - person.yearOfBirth;
        }

        if (currentPersonAge > oldestPerson.age){
            delete oldestPerson.age;
            person.age = currentPersonAge;
            oldestPerson = person;
        }
        return oldestPerson;
    }, people[0])

    delete result.age;
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
