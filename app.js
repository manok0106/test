'user strict';
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./config/connection');
require('./routes/index')(app);
require('./config/errorhandler')(app);

const PORT = 2003;

app.listen(PORT, () => {
    console.log(`Server is running: ${PORT}`);



});
