import { Request, Response } from 'express';

const nameMiddelWare = (req: Request, res: Response, next: Function) => {
  let name = req.query.name;
  
  
  if (name != null) {
    next();
  }else {
      res.status(404);
      res.send('image not found');

  }
};

export default nameMiddelWare;
