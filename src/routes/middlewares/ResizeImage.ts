import { Request, Response } from 'express';
import validate from '../../utilities/validateImage';

export const validateUrlParams = async (
  req: Request,
  res: Response,
  next: () => void
): Promise<Response | undefined> => {
  const height: number = req.query.height
    ? Number(req.query.height as string)
    : 0;
  const width: number = req.query.width ? Number(req.query.width as string) : 0;
  const imageName: string = req.query.imagename as string;
  const validateNameExtension: boolean =
    validate.validateNameWithoutExtension(imageName);

  if (!validateNameExtension) {
    return res.status(400).send('please write imagename without extensions');
  }

  const validateName: boolean = await validate.validateImageName(imageName);
  const validateHeight: boolean = validate.validateImageHeight(height);
  const validateWidth: boolean = validate.validateImageWidth(width);

  if (!validateName) {
    return res
      .status(400)
      .send('Image Not Exist ,Please use Valid ImagName in imagename field');
  }

  if (!validateHeight) {
    return res.status(400).send('please add valid height value');
  }

  if (!validateWidth) {
    return res.status(400).send('please add valid width value');
  }

  next();
};
