import path from 'path';

export const ImageDir = path.resolve(__dirname, '../../assets/images');
export const ResizeDir = path.resolve(__dirname, '../../assets/resize');

export interface Image {
  imageName: string;
  width: number;
  height: number;
}

export interface sharpImage extends Image {
  sourceDir(): string;
  distDir(): string;
}

export class ResizeImage implements sharpImage {
  imageName: string;
  width: number;
  height: number;
  constructor(imageName: string, width: number, height: number) {
    this.imageName = imageName;
    this.width = width;
    this.height = height;
  }

  sourceDir(): string {
    const imagePath: string = `${path.resolve(
      ImageDir,
      `${this.imageName}.jpg`
    )}`;
    return imagePath;
  }

  distDir(): string {
    const imagePath: string = path.resolve(
      ResizeDir,
      `${this.imageName}_${this.height}_${this.width}.jpg`
    );
    return imagePath;
  }
}
