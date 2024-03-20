const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
const jsonParser = bodyParser.json();
const fileName = 'races.json';

// Load data from file
rawData = fs.readFileSync(fileName);
data = JSON.parse(rawData);

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', (request, response) => {
    response.render('home');
});

// This is a RESTful GET web service
app.get('/races', (request, response) => {
    console.log("get races ")
    console.log(JSON.parse(fs.readFileSync(fileName)))
    response.send(JSON.parse(fs.readFileSync(fileName)));
});

// This is a RESTful POST web service
app.post('/races', jsonParser, (request, response) => {
    console.log("post called")
    console.log(request.body)
    data.push(request.body);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    response.end();
});
app.delete('/races', jsonParser, (request, response) => {
    console.log('delete called')
            fs.writeFileSync(fileName,JSON.stringify(request.body, null, 2))
            rawdata = fs.readFileSync(fileName);
            data=JSON.parse(rawdata);

    console.log(JSON.parse(fs.readFileSync(fileName)))
    response.end();
});

app.listen(port);
console.log('server listening on port 3000');