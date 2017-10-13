const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cohorts = require('./routes/cohorts');
const splash = require('./routes/splash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/test', (request, response) => {
  response.send(`Welcome to Random Team Picker, this is a response to see if server is setup and working correctly`)
})

app.use('/', splash)
app.use('/cohorts', cohorts)


app.listen(5000);
console.log('Server is listening on http://localhost:5000');
