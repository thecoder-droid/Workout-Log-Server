require("dotenv").config();
let express = require('express');
let app = express();

let sequelize = require('./db');

let log = require('./controllers/workoutcontroller.js');
let user = require('./controllers/usercontroller.js');

sequelize.sync();
// sequelize.sync({force: true});
app.use(require('./middleware/headers'));

app.use(express.json());
app.use('/api', user);

app.use(require('./middleware/validate-session'));
app.use('/api/log', log);

app.listen(3000, function(){
    console.log("app is listening to port 3000");
});