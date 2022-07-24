import express from 'express';
import nameMiddelWare from './middelware/nameMiddelware';
import process from './utility/imageProcess';
import existedImage from './middelware/existedImageMiddelware';

const app = express();
const port = 3001;

app.use([nameMiddelWare, existedImage]);

app.get('/api', (req, res) => {
  const response = async () => {
    await process(req, res);
  };

  response();
});

app.listen(port, () => {
  console.log(`server is runing on http://127.0.0.1:${port}`);
});

export default app;
