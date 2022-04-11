const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

//call environment variables inside the node application
require('dotenv').config();

//cross-origin requests
app.use(cors());
//pass json payloads from the front-end to the back-end
app.use(express.json());
app.use(express.urlencoded());

//first route; root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));