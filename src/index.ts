import express from 'express';
import nameMiddelWare from './middelware/nameMiddelware';
import process from './utility/imageProcess';
import existedImage from './middelware/existedImageMiddelware';

const app = express();
const port = 3001;

app.use([nameMiddelWare, existedImage]);

app.get('/api', (req, res) => {
  const name: string = req.query.name as string;
  const height: number = parseInt(req.query.h as string);
  const width: number = parseInt(req.query.w as string);
  const response = async () => {
    const data = await process(name, height, width);
    if (data[0]) {
      res.sendFile(data[1]);
    } else {
      res.end(data[1]);
    }
  };

  response();
});

app.listen(port, () => {
  console.log(`server is runing on http://127.0.0.1:${port}`);
});

export default app;
