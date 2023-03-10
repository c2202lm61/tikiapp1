import { Router } from 'express';
import AdminController from '../app/Admin/AdminController.js';
import AuthAdminController from '../app/Admin/auth/AuthAdminController.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const adminRoutes = new Router();

// Add routes
 adminRoutes.get('/', AdminController.adminHome);
adminRoutes.get('/login', AuthAdminController.AdminFormLogin);
adminRoutes.post('/login', AuthAdminController.processAdminLogin);
 adminRoutes.post('/create_product',AdminController.create_product)
 adminRoutes.post('/delete_product',AdminController.delete_product)
 adminRoutes.get('/edit/:id',AdminController.form_update)
 adminRoutes.post('/update_product',AdminController.update_product)
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default adminRoutes;
