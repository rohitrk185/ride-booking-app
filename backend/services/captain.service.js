const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !capacity ||
    !plate ||
    !vehicleType
  ) {
    throw new Error('All fields are required to create user.');
  }
  const user = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      type: vehicleType,
      color,
      capacity,
      plate,
    },
  });

  return user;
};
