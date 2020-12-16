const faker = require('faker/locale/fr');
const fs = require('fs');
const fileName = './data.json';
const file = require(fileName);
const db = require('./../node/mysqlConnect');

// Générer la data dans un json

const generateAge = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateGender = () => {
  const x = generateAge(0, 1);
  if (x == 0) {
    return 'Male';
  } else {
    return 'Female';
  }
};

const generateUsers = () => {
  let users = [];

  for (let id = 1; id <= 5000; id++) {
    let gender = generateGender();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let age = generateAge(18, 80);
    let country = faker.address.country();
    let job = faker.name.jobType();

    users.push({
      id: id,
      genre: gender,
      nom: lastName,
      prenom: firstName,
      email: email,
      age: age,
      pays: country,
      job: job,
      password:
        '4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2',
      type: 'users',
    });
  }

  return users;
};

const obj = generateUsers();
console.log(obj);
fs.writeFileSync('data.json', JSON.stringify(obj, null, '\t'));

// Ajout dans la base de données
const id = [];
const genre = [];
const nom = [];
const prenom = [];
const email = [];
const age = [];
const pays = [];
const job = [];
const password = [];
const type = [];

file.forEach((e) => {
  id.push(e.id);
  genre.push(e.genre);
  nom.push(e.nom);
  prenom.push(e.prenom);
  email.push(e.email);
  age.push(e.age);
  pays.push(e.pays);
  job.push(e.job);
  password.push(e.password);
  type.push(e.type);
});

const addToDb = (
  id,
  genre,
  nom,
  prenom,
  email,
  age,
  pays,
  job,
  password,
  type,
  req,
  res
) => {
  let query = `INSERT INTO users (id, genre, nom, prenom, email, age, pays, job, password, type) 
  VALUES ('${id}', '${genre}', '${nom}', '${prenom}', '${email}', '${age}', '${pays}', '${job}','${password}', '${type}')`;

  db.query(query, (err, result) => {
    if (err) {
      if (err.code === 'ER_PARSE_ERROR') {
      } else {
        throw err;
      }
    }
  });
};

for (let i = 0; i < id.length; i++) {
  let x = addToDb(
    id[i],
    genre[i],
    nom[i],
    prenom[i],
    email[i],
    age[i],
    pays[i],
    job[i],
    password[i],
    type[i]
  );
}
