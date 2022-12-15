import * as fs from 'fs-extra';
import path from 'path';
import { ImageDir, ResizeDir, Image } from '../utilities/ImageModule';

const checkImageExist = async (imageUrl: string): Promise<boolean> =>
  await fs.pathExists(imageUrl);

const validateImageName = async (imageName: string): Promise<boolean> => {
  const imageUrl: string = `${path.resolve(ImageDir, `${imageName}.jpg`)}`;
  const checkExist: boolean = await checkImageExist(imageUrl);
  return checkExist;
};

const validateNameWithoutExtension = (imageName: string): boolean => {
  const imageWithExtan: string[] = imageName.split('.');
  return imageWithExtan.length > 1 ? false : true;
};

const validateImageHeight = (imageHeight: number | undefined): boolean =>
  imageHeight && imageHeight > 0 ? true : false;

const validateImageWidth = (imageWidth: number | undefined): boolean =>
  imageWidth && imageWidth > 0 ? true : false;

const checkImageResize = async (
  imageObject: Image
): Promise<boolean | string> => {
  const imageUrl: string = `${path.resolve(
    ResizeDir,
    `${imageObject.imageName}_${imageObject.height}_${imageObject.width}.jpg`
  )}`;

  const checkExist: boolean = await checkImageExist(imageUrl);
  return checkExist ? imageUrl : false;
};

const checkResizeDirExist = async (): Promise<void> => {
  try {
    await fs.access(ResizeDir);
  } catch {
    await fs.mkdir(ResizeDir);
  }
};

export default {
  validateImageName,
  validateImageHeight,
  validateImageWidth,
  checkImageResize,
  checkResizeDirExist,
  validateNameWithoutExtension,
};
