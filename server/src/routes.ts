import express, { request, response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from  './controllers/ItemsController';

// Index, show, create, update, delete

const routes = express.Router();

const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointController.create);
routes.get('/points/:id', pointController.show);
routes.get('/points', pointController.index);

export default routes;