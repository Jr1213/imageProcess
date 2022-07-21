import express from 'express';
import path from 'path';
import sharp from 'sharp';
import nameMiddelWare from './middelware/nameMiddelware';
const app = express();
const port = 3001;

interface opt {
  hight?: number;
  width?: number;
}

app.get('/api',nameMiddelWare ,(req, res) => {
  let name = req.query.name as unknown as string;

  let image = path.resolve(`full/${name}`);
  let outDir = path.resolve(`thumbnul/${name}`);

  let options: opt = {};

  req.query.h != null
    ? (options.hight = parseInt(req.query.h as unknown as string))
    : '';
  req.query.w != null
    ? (options.width = parseInt(req.query.w as unknown as string))
    : '';

  sharp(image)
    .resize(options)
    .toFile(outDir)
    .then(() => {
      res.status(200);

      res.sendFile(path.resolve(`thumbnul/${req.query.name}`));
    })
    .catch((e) => {
    res.status(500)
      res.send('faild to compelet your process')
    });
});

app.listen(port, () => {
  console.log(`server is runing on 127.0.0.1:${port}`);
});

export default app;
