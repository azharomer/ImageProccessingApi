import validate from './../../../utilities/validateImage';
import { Image } from '../../../utilities/ImageModule';

describe('3- check image validation', (): void => {
  it('check image name exist or not', async (): Promise<void> => {
    const imageName: string = 'fjord';
    expect(await validate.validateImageName(imageName)).toBeTrue();
  });

  it('check if image  fjord_100_200  exists or not', async (): Promise<void> => {
    const imageObg: Image = { imageName: 'fjord', height: 200, width: 200 };
    expect(await validate.checkImageResize(imageObg)).toBeFalsy();
  });
});
