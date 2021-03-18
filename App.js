const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = ['Jakub', 'Piotr', 'Marcin', 'Bartek'];
const femaleNames = ['Basia', 'Gosia', 'Julia', 'Ela'];
const lastNames = ['Kowal', 'Nowak', 'Obajtek', 'Dworek'];

function randChoice (arr) {
  const randomElement = arr[Math.floor(Math.random()*arr.length)];
  return randomElement;
}

const people = [];

for(let i = 1; i <= 20; i++) {
  const person = {};

  person.gender = randChoice(genders);

  if(person.gender === 'Male'){
    person.name = randChoice(maleNames)
  } else {
    person.name = randChoice(femaleNames)
  }

  person.surname = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  people.push(person);
};

const convertJason = JSON.stringify(people);

fs.writeFile('people.json', convertJason, (err) => {
  if (err){
    throw err;
    console.log('The file has been saved!');
  }
  console.log('All good. File has been saved');
});
