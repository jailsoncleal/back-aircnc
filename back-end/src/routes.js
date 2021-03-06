const express = require('express');
const multer = require('multer');

const uploaConf = require('./config/upload');
const SessionController = require('./controllers/SessitionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploaConf);
routes.post('/sessions', SessionController.store);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboards', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;