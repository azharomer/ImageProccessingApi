import { Request, Response } from 'express';
import { sharpImage, ResizeImage, ImageDir } from '../utilities/ImageModule';
import validate from '../utilities/validateImage';
import sharp from 'sharp';
import * as fs from 'fs-extra';

const resizeImage = async (req: Request, res: Response): Promise<void> => {
  await validate.checkResizeDirExist();
  const ImageObj: ResizeImage = new ResizeImage(
    req.query.imagename as string,
    parseInt(req.query.height as string),
    parseInt(req.query.width as string)
  );

  const checkImageExist: string | boolean = await validate.checkImageResize({
    imageName: ImageObj.imageName,
    height: ImageObj.height,
    width: ImageObj.width,
  });

  if (!checkImageExist) {
    const createImage: boolean = await createResizeImage(ImageObj);
    createImage
      ? res.status(200).sendFile(ImageObj.distDir())
      : res.status(500).send('something wronge Try again');
  } else {
    res.status(200).sendFile(checkImageExist as string);
  }
};

const getAllImages = async (_req: Request, res: Response): Promise<void> => {
  const files: string[] = fs.readdirSync(ImageDir);
  const result: string = files
    .map((file: string) => {
      const fileName: string = file.split('.')[0];
      return `<h4><a href="/api/images/resize?imagename=${fileName}&width=100&height=100">${file}</a></h4>`;
    })
    .join(' ');
  res.status(200).send(result);
};

const createResizeImage = async (imageObject: sharpImage): Promise<boolean> => {
  try {
    const imgSource: string = imageObject.sourceDir();
    const imgDist: string = imageObject.distDir();
    await sharp(imgSource)
      .resize(imageObject.width, imageObject.height)
      .toFormat('jpeg')
      .toFile(imgDist);
    return true;
  } catch {
    return false;
  }
};

export default {
  getAllImages,
  resizeImage,
};
