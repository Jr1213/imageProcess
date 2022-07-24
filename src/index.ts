import express from 'express';
import nameMiddelWare from './middelware/nameMiddelware';
import process from './utility/imageProcess';
import existedImage from './middelware/existedImageMiddelware';
import path from 'path';

const app = express();
const port = 3001;

app.use([nameMiddelWare, existedImage]);

app.get('/', (req, res) => {
  const response = async () => {
    await process(req,res);
  
  };

  response();
});

app.listen(port, () => {
  console.log(`server is runing on http://127.0.0.1:${port}`);
});

export default app;
