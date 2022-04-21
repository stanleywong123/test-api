const faker = require("faker");
const fs = require("fs");

const generatePersonsData = (number) => {
  const persons = [];
  for (let i = 0; i <= number; i++) {
    persons.push({
      id: i,
      name: faker.name.firstName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
  }
  return persons;
};

const generateVehiclessData = (number) => {
  const vehicles = [];
  for (let i = 0; i <= number; i++) {
    vehicles.push({
      id: i,
      vehicle: faker.vehicle.vehicle(),
      fuel: faker.vehicle.fuel(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color(),
    });
  }
  return vehicles;
};

fs.writeFileSync(
  "./db.json",
  JSON.stringify({
    users: generatePersonsData(20),
    vehicles: generateVehiclessData(20),
  })
);
