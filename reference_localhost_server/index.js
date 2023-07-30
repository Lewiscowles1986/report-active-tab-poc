const express = require('express');
const cors = require('cors');

const app = express();
const port = 80;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors())

app.post('/events/browser/tabChanged', (req, res) => {
  const { url } = req.body;
  const { ['user-agent']: userAgent } = req.headers;
  console.log('Received POST request at /events/browser/tabChanged:', { url, userAgent });

  res.status(200).send('Received the tabChanged event.');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
