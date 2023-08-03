const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require ('./routes/apiRoutes/htmlRoutes/index.js')
const htmlRoutes = require('./routes/apiRoutes/htmlRoutes/html.js')

app.use(express.static('public'));
// parse incoming data
app.use(express.urlencoded({extended: true}));
// parse incoming json data
app.use(express.json());
app.use("/api", apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API Server is on port ${PORT}`);
});