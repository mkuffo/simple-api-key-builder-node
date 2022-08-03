const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/developer.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',routes);

app.listen(port, () => {
  console.log(`Simple api key builder app running on port ${port}`);
})