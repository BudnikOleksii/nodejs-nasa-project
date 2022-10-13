const express = require('express');

const { HttpGetAllPlanets } = require('./planets.contoller');

const planetsRouter = express.Router();

planetsRouter.get('/', HttpGetAllPlanets);

module.exports = planetsRouter;
