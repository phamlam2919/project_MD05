import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    return v2.config({
      cloud_name: 'dzrtiatsj',
      api_key: '989934455237749',
      api_secret: 'hsGfb4viUsUoo_MnCDzvxZhrJpQ',
    });
  },
};
