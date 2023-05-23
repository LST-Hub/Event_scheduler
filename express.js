const express = require('express');
const scheduleController = require('./controllers/schedule.controller');
const app = express();
const bodyParser = require("body-parser");
const port = 8040;
console.log("date", new Date())

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/scheduleRealTimeEvent', scheduleController.scheduleRealTimeEvent);
app.post('/scheduleSingleEvent', scheduleController.scheduleSingleEvent);
app.post('/scheduleWeeklyEvent', scheduleController.scheduleWeeklyEvent);

app.listen(port, () => console.log(`Server listening on port ${port}!`));