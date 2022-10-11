import images from '../../routes/api/images';
import validate from '../../routes/api/validate' ;

describe('Test for image processing',()=>{

  it('should create image of required width and height.', async ()=>{

    const input: string = 'resources/images/fjord.jpg' ;
    const output: string = 'resources/resizedImages/fjord-100x100.jpg' ;
    const height: number = 100 ;
    const width: number = 100 ;
  
    await images.creatImage(input,output,width,height);
    expect(validate.imageExist(output)).toBe(true);

  });
  

});