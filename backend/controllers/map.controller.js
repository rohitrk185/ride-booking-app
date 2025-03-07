const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  if (!address) {
    return res.staus(401).json({ errors: ['Invalid Input'] });
  }

  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    return res.status(200).json(coordinates);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: 'Coordinates not found' });
  }
};

module.exports.getDistanceTime = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    const distanceTime = await mapService.getDistanceTime(origin, destination);

    res.status(200).json(distanceTime);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    return res.status(200).json(suggestions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
