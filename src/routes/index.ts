import express from 'express' ;
import images from './api/images'

const routes = express.Router() ;

routes.get('/',(req, res)=> {
    
    res.status(200).send("main api router");

});

routes.use('/images',images.images);

export default routes ;