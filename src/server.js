import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/', router);

app.use(express.json());
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
