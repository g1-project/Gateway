import express from 'express';
import User from './app/microservices/User.js';

const routes = new express.Router();

routes.get('/oi', User.createUser);

export default routes;
