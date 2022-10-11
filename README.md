Resize Image
    - creat image of entered size and save it to resizedImages folder
    - display created image
    - if the image of width and height required alreaady exists it will be displayed without further processing (without resizing again)

API:
    . URL:
        /api/images

    .  Method:
         - GET

    . URL Params
        - Required:
            . filename =[string]
            . width = [number]
            . height = [number]

        - optional:
          None

    . Success Response:
        Code: 200
        Content: [resized-image-file]

    . Error Response:
        Code: 404
        Content:  "Can't find image with this name, try again with diffrent name!"
        OR

        Code: 401 
        Content: "Missing or invalid parameter." 

Build:
    . in your terminal run: 
        - npm intit 
        - npm install
        - npm run build
        - npm run prettier

Usage Instructions:
    . in your terminal run: node build/index
    . in your browser go to "http://localhost:3000/api/images?filename=<filename>&width=<width>&height=<height>" 
    . replace <filename>, <width> and <height> with the desired filename, width, and height respectively 
        - You should be displayed by the resized image 
        - If the image of the required size dosen't already exist in the resizedImages folder it should be created and added to it. 
    . in your terminal press: ctrl+c to exit
    . Exeptions:
        - if the filename entered does not exist in images folder you should be displayed by the error message "Can't find image with this name, try again with diffrent name!" 
        - if the width or height entered are not a postive intger you should be displayed by the error message "Missing or invalid parameter."  
        - if filename, width or height parameters are missing you should be displayed by the error message "Missing or invalid parameter."

Testing:
    . in your terminal run: npm run start to test project src.

    . testing for problematic patterns:
        - in your terminal run: npm run lint 
    
    . unit testing:
        - make sure that your resizedImages folder does not contain image of name "fjord-100x100.jpg"
        - in your terminal run: npm run test 
    
    

Tools:
    . npm 
    . nodejs
    . typeScript
    . prettier
    . eslint
    . express
    . jasmine
    . superTest
    . sharp

