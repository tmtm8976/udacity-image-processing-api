import validate from '../../routes/api/validate' ;


describe('Test for imput validation',()=>{
    
    afterAll(()=>{
        console.log('A valid url is used (http://localhost:3000/api/images?filename=fjord&width=100&height=150) ');
    });

    it('should return true if the prameters exist and are valid',()=>{

        const url : string = 'http://localhost:3000/api/images?filename=fjord&width=100&height=150' ;
        const height : string= '150' ;
        const width : string= '100' ;

        expect(validate.validInput(url,width,height)).toBe(true);

    });

    it('should return true if the required image exist',()=>{

        const imagePath : string= 'resources/images/fjord.jpg' ;

        expect(validate.imageExist(imagePath)).toBe(true);

    });
  
});