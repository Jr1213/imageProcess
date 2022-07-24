import { Request , Response} from 'express';
import path from 'path';
import sharp from 'sharp';

const process = (data: Request,res:Response): boolean => {
  const imageName: string = `${data.query.name as string}`;
  const height: number = parseInt(data.query.h as string);
  const width: number = parseInt(data.query.w as string);
  const outDir = path.resolve(`thumbnul/${imageName}-small.jpg`);
    try {

        sharp(path.resolve(`full/${imageName}.jpg`))
          .resize({ height: height, width: width })
          .toFile(outDir).then(
            ()=>{
            res.sendFile(outDir)

            }            
          );
        return true
    } catch (e){
        console.log(e);
        
        return false
    }
};

export default process;
