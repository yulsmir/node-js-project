import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // Sending our index.html file as
  // response. In path.join() method
  // __dirname is the directory where
  // our app.js file is present. In
  // this case __dirname is the root
  // folder of the project.
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/', router);

app.use(express.json());
// app.use('/');
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
