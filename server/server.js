const express = require('express');
const app = express();
const path = require('path');

const controller = require('./controller.js');
//app.use('/', express.static(path.join(__dirname, '../src/index.html')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// app.get('/signup', controller.addUser, (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../signup.html')); 
// });

app.listen(3000, ()=> {
    console.log('Server listening on port: ' + 3000);
});

//catch-all route handler for requests to unkown route
app.use((req, res) => {
    res.sendStatus(404);
})

//default error handler
app.use((err, req, res, next) =>{
    const defaultErr = {
        log: 'Express error handler caught unkown middleware error',
        status: 400,
        message: {err: 'An error occurred'},
    };
    const errorObj = Object.assign(defaultErr, err);
    res.locals.message = err.message;
    console.log('ERROR: ' + errorObj.log);
    return res.status(errorObj.status).json(res.errorObj.message);
});