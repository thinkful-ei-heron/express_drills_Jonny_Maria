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

app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;

    //2. validate the values
    if(!name) {
        //3. name was not provided
        return res.status(400).send('Please provide a name');
    }

    if(!race) {
        //3. race was not provided
        return res.status(400).send('Please provide a race');
    }

    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;

    //6. send the response
    res.send(greeting);
});

app.listen(8000, (req, res) => {
    console.log('Express server is listening on port 8000!');
});
