import express, { response }  from 'express';
const sharp = require('sharp');
import path from 'path'  ;
import fs from 'fs' ;
import validate  from './validate';


const images = express.Router();

//function to creat new image of required size
async function creatImage(input:string, output:string, width:number , height:number):Promise<void>{
    const p =  sharp(input) ;
    p.resize(width, height);

    try{
        //wait for file to be created
        await p.toFile(output);
    }
    catch(e){ console.log('EXCEPTION', e); }
}


images.get('/', async (req : express.Request , res : express.Response ):
Promise<void> => {

    const url : string = req.url ; 

    //get file name, width, height
    const filename : string= ""+ req.query.filename ;
    const width : string = req.query.width as string  ;
    const height : string = req.query.height as string  ;


    //define input & output paths
    const input : string =  "resources/images/"+filename+'.jpg'; 
    const output = `resources/resizedImages/${filename}-${width}x${height}.jpg`;

    if(!validate.validInput(url, width, height)){   //validate
      
        res.status(401).send( 'Missing or invalid parameter.');

    }else if(!validate.imageExist(input)){          //check if image exists
        res.status(404).send('Can\'t find image with this name, try again with diffrent name!');

    }else{
        //caching, if an image of required size already exists send it 
        if(validate.imageExist(output)){
            res.sendFile(path.resolve(output));
        } 

        //if image of the required size does not exist creat one then send it
        else{
            await creatImage(input, output,parseInt(width) ,parseInt(height));
            res.sendFile(path.resolve(output));
        }
    }

});


export default {images, creatImage };