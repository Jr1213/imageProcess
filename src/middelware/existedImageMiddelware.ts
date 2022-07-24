import { Request, Response } from 'express';
import { readFile } from 'fs';
import imageSize from 'image-size';
import path from 'path';

const existedImage = (req: Request, res: Response, next: Function): void => {
  const imageName = `${req.query.name}`;
  const height = req.query.h;
  const width = req.query.w;
  const imagePath = path.resolve(`thumbnul/${imageName}-small.jpg`);

  readFile(imagePath, (err, data): void => {
    if (data == undefined) {
      res.status(404);
      res.end('image not found')
      return;
    } else {
      const dimitions = imageSize(imagePath);
      if (dimitions.width == width && dimitions.height == height) {
        res.sendFile(path.resolve(`thumbnul/${req.query.name}-small.jpg`));
      } else {
        next();
      }
    }
  });
};

export default existedImage;
