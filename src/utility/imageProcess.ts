import path from 'path';
import sharp from 'sharp';

const process = async (
  name: string,
  height: number,
  width: number
): Promise<[boolean, string]> => {
  const outDir = path.resolve(`thumbnul/${name}-small.jpg`);
  try {
    await sharp(path.resolve(`full/${name}.jpg`))
      .resize({ height: height, width: width })
      .toFile(outDir);
    return [true, outDir];
  } catch (e) {
    console.log(e);

    return [false, 'unexpected error happend'];
  }
};

export default process;
