const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/api/organizations', require('../../routes/organization'));
app.use('/api/people', require('../../routes/person'));
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
