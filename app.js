const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/sum', (req, res) => {
    //1. get values from the request
    const a = req.query.a;
    const b = req.query.b;

    //2. validate the values
    if(!a) {
        //3. name was not provided
        return res.status(400).send('Please provide a first Digit');
    }

    if(!b) {
        //3. race was not provided
        return res.status(400).send('Please provide a second Digit');
    }

    //4. and 5. both name and race are valid so do the processing.
    const sum = parseInt(a)+parseInt(b);

    res.send(`${sum}`);
});

app.get('/cipher', (req, res) => {
    //1. get values from the request
    const text = req.query.text;
    const shift = req.query.shift;

    //2. validate the values
    if(!text) {
        //3. name was not provided
        return res.status(400).send('Please provide a text');
    }

    if(!shift) {
        //3. race was not provided
        return res.status(400).send('Please provide a shift');
    }

    //4. and 5. both name and race are valid so do the processing.
   const ceasarCipher = function() {
       let arr = text.split(''); 
       let arr2=[];
       console.log(arr2);
       for (let char of arr) {
        
           arr2.push(String.fromCharCode(String.charCodeAt(char) + parseInt(shift)))  
           console.log(arr2)
       }
       console.log(arr2);
       return arr2.join(); 
   }

    //6. send the response
    res.send(ceasarCipher());
});

app.listen(8000, (req, res) => {
    console.log('Express server is listening on port 8000!');
});
