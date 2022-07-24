import { Request, Response } from 'express';
import { readFile } from 'fs';
import path from 'path';

const nameMiddelWare = (req: Request, res: Response, next: Function): void => {
  const imageName = req.query.name;
  const height = req.query.h;
  const width = req.query.w;
  readFile(path.resolve(`full/${imageName}.jpg`), (err, data) => {
    if (!data) {
      res.status(404);
      res.send('image not found');
    }
  });
  if (imageName && height && width) {
    next();
    return;
  }
  if (!imageName) {
    res.status(404);
    res.send('name is required');
    return;
  }

  if (!height) {
    res.status(404);
    res.send('height is required');
    return;
  }

  if (!width) {
    res.status(404);
    res.send('width is required');
    return;
  }
};

export default nameMiddelWare;
