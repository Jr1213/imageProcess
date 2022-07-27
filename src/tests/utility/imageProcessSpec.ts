import path from 'path';
import process from '../../utility/imageProcess';

describe('process work', () => {
  const imagePath: string = path.resolve('thumbnul/img1-small.jpg');

  it('process working correctely', async () => {
    const res = await process('img1', 500, 500);
    expect(res).toEqual([true, imagePath]);
  });
});


