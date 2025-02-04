const { dbConnection } = require('./database/config');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

dbConnection();

app.use(cors())

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
