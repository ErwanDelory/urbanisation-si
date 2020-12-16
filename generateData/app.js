const faker = require('faker/locale/fr');
const fs = require('fs');

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
      gender: gender,
      firstname: firstName,
      lastname: lastName,
      email: email,
      age: age,
      country: country,
      job: job,
      password:
        '4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2',
    });
  }

  return users;
};

const obj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(obj, null, '\t'));
