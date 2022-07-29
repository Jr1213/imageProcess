import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs';
import path from 'path';

const nameMiddelWare = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const imageName = req.query.name;
  const height = req.query.h;
  const width = req.query.w;
  readFile(path.resolve(`full/${imageName}.jpg`), (err, data) => {
    if (!data) {
      res.status(404);
      res.end('image not found');
    }
  });
  if (!imageName) {
    res.status(404);
    res.end('name is required');
    return;
  }

  if (!height) {
    res.status(404);
    res.end('height is required');
    return;
  }

  if (!width) {
    res.status(404);
    res.end('width is required');
    return;
  }
  if (imageName && height && width) {
    next();
    return;
  }
};

export default nameMiddelWare;
