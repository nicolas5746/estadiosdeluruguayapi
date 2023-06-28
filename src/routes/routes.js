import express from 'express';
import { getDepartamentos, getEstadios } from '../data/data.js';

// Router
const routes = express.Router();

// Routes
routes.get('/departamentos', getDepartamentos);
routes.get('/estadios', getEstadios);

export default routes;