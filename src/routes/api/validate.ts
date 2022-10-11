import fs from 'fs' ;

function  validInput(url : string , width : string, height : string): boolean {

    //check if the required parameters exists
    const reqParam :  boolean = url.includes('filename')  && url.includes('width') && url.includes('height') ;

    //check if the height and weight vlaues are numbers
    const numVal : boolean = (/^\d+$/).test(width as string) && (/^\d+$/).test(height) && (parseInt(height)>0&&parseInt(width)>0) ;

    return (numVal&&reqParam) ;
}

function imageExist(path : string) : boolean {

    //check if the image file exists
    return fs.existsSync(path);
}

export default {validInput , imageExist} ;