import express from 'express';
import HomeController from "../app/controller/HomeController.js"
import AuthController from "../app/controller/auth/client/AuthController.js"
import CartController from '../app/controller/CartController.js';
import middleware from '../app/midleware/middleware.js';
import sendEmail from '../app/controller/sendEmail.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';
var app = express()

const routes = express.Router();
// Add routes
routes.get('/', HomeController.homepage);

routes.get('/login', AuthController.login);
routes.post('/form-login', AuthController.form_login);

routes.get('/logout', AuthController.logout);
routes.get('/addtocart/:id/:name/:price',CartController.addToCart);
routes.get('/clearallcart',CartController.clearAllCart);
routes.get('/removecart/:id',CartController.removeCart)
routes.get('/showcart',CartController.showCart);
routes.post('/search', HomeController.search);
routes.get('/payment', HomeController.payment);
routes.get('/filter/:id', HomeController.filter);

routes.post('/order', HomeController.order);
//routes.use(middleware.checklogin)
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
routes.get("/sendemail",function (req,res) {
    sendEmail();
    res.send("gui email")
})

routes.get('/set_session', (req, res) => {
    //set a object to session
    req.session.User = {
        website: 'anonystick.com',
        type: 'blog javascript',
        like: '4550'
    }

    return res.status(200).json({ status: 'success' })
})

routes.get('/get_session', (req, res) => {
    //check session
    if (req.session.User) {
        return res.status(200).json({ status: 'success', session: req.session.User })
    }
    return res.status(200).json({ status: 'error', session: 'No session' })
})

//destroy session
routes.get('/destroy_session', (req, res) => {
    //destroy session
    req.session.destroy(function (err) {
        return res.status(200).json({ status: 'success', session: 'cannot access session here' })
    })
})


export default routes
